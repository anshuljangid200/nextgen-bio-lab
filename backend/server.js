const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({ ok: true, service: "micrylis-backend" });
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Micrylis backend running on http://localhost:${PORT}`);
});
