const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const { connectDB, isDatabaseConfigured } = require("../config/db");
const { sendAdminNotification } = require("../utils/email");
const {
  MOBILE_REGEX,
  EMAIL_REGEX,
  parseLoginId,
  findUserByLoginId,
  databaseNotReadyResponse,
} = require("../utils/auth");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    if (!isDatabaseConfigured()) {
      return res.status(503).json(databaseNotReadyResponse);
    }

    const { name, username, mobileNumber, password, email, confirmPassword } =
      req.body;

    if (!name?.trim() || !username?.trim() || !mobileNumber || !password) {
      return res.status(400).json({
        success: false,
        message: "Name, username, mobile, and password are required",
      });
    }

    if (!MOBILE_REGEX.test(String(mobileNumber).trim())) {
      return res.status(400).json({
        success: false,
        message: "Enter a valid 10-digit Indian mobile number",
      });
    }

    if (password.length < 8) {
      return res.status(400).json({
        success: false,
        message: "Password must be at least 8 characters",
      });
    }

    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: "Passwords do not match",
      });
    }

    const normalizedUsername = username.trim().toLowerCase();
    const normalizedPhone = String(mobileNumber).trim();
    const normalizedEmail = email?.trim()
      ? email.trim().toLowerCase()
      : undefined;

    if (normalizedEmail && !EMAIL_REGEX.test(normalizedEmail)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email address",
      });
    }

    await connectDB();

    const conflictQuery = [
      { username: normalizedUsername },
      { phone: normalizedPhone },
    ];
    if (normalizedEmail) conflictQuery.push({ email: normalizedEmail });

    const existingUser = await User.findOne({ $or: conflictQuery });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Username, mobile, or email already registered",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name: name.trim(),
      username: normalizedUsername,
      email: normalizedEmail,
      phone: normalizedPhone,
      password: hashedPassword,
    });

    await sendAdminNotification(
      "New User Registration — Micrylis Biotech",
      `
        <div style="font-family:Georgia,serif;padding:24px;background:#FAF7F2">
          <h2 style="color:#6B1D1D">New User Registered</h2>
          <hr/>
          <p><b>Name:</b> ${name.trim()}</p>
          <p><b>Username:</b> ${normalizedUsername}</p>
          <p><b>Mobile:</b> ${normalizedPhone}</p>
          <p><b>Email:</b> ${normalizedEmail || "—"}</p>
          <p><b>Time:</b> ${new Date().toLocaleString("en-IN")}</p>
        </div>
      `
    );

    return res.json({
      success: true,
      message: "Registration successful",
      data: {
        user: {
          id: newUser._id,
          name: newUser.name,
          username: newUser.username,
          mobileNumber: newUser.phone,
          email: newUser.email,
        },
      },
    });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({
      success: false,
      message: "Registration failed",
    });
  }
});

router.post("/login", async (req, res) => {
  try {
    if (!isDatabaseConfigured()) {
      return res.status(503).json(databaseNotReadyResponse);
    }

    const { loginId, password, rememberMe } = req.body;

    if (!loginId?.trim() || !password) {
      return res.status(400).json({
        success: false,
        message: "Email/mobile and password are required",
      });
    }

    await connectDB();

    const user = await findUserByLoginId(User, loginId);
    if (!user) {
      return res.status(400).json({ success: false, message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: "Invalid password" });
    }

    const parsed = parseLoginId(loginId);

    await sendAdminNotification(
      "User Login Alert — Micrylis Biotech",
      `
        <div style="font-family:Georgia,serif;padding:24px;background:#FAF7F2">
          <h2 style="color:#6B1D1D">User Logged In</h2>
          <hr/>
          <p><b>Login ID:</b> ${parsed.value}</p>
          <p><b>Name:</b> ${user.name}</p>
          <p><b>Username:</b> ${user.username}</p>
          <p><b>Mobile:</b> ${user.phone}</p>
          <p><b>Email:</b> ${user.email || "—"}</p>
          <p><b>Remember me:</b> ${rememberMe ? "Yes" : "No"}</p>
          <p><b>Time:</b> ${new Date().toLocaleString("en-IN")}</p>
        </div>
      `
    );

    return res.json({
      success: true,
      message: "Login successful",
      data: {
        user: {
          id: user._id,
          name: user.name,
          username: user.username,
          mobileNumber: user.phone,
          email: user.email,
        },
        rememberMe: Boolean(rememberMe),
      },
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ success: false, message: "Login failed" });
  }
});

module.exports = router;
