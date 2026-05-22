import { useState, useMemo, useEffect } from "react";
import { motion } from "framer-motion";
import {
  X,
  AtSign,
  Lock,
  Eye,
  EyeOff,
  User,
  Smartphone,
  Mail,
} from "lucide-react";
import {
  getPasswordStrength,
  getConfirmStrength,
} from "../utils/passwordStrength";
import "./AuthModal.css";

type AuthTab = "login" | "register";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: AuthTab;
}

const AUTH_API = import.meta.env.VITE_API_URL || "";

async function authFetch(path: string, body: object) {
  const res = await fetch(`${AUTH_API}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const msg =
      data.message ||
      (res.status === 503
        ? "Accounts are not active yet. Please use Contact Us for now."
        : "Request failed");
    throw new Error(msg);
  }
  return data;
}

function StrengthBar({ strength }: { strength: ReturnType<typeof getPasswordStrength> }) {
  if (!strength.label) return null;
  return (
    <div className="auth-strength">
      <div className="auth-strength-bar">
        <div
          className="auth-strength-fill"
          style={{
            width: `${strength.percent}%`,
            background: strength.color,
          }}
        />
      </div>
      <span className="auth-strength-label" style={{ color: strength.color }}>
        {strength.label}
      </span>
    </div>
  );
}

export function AuthModal({ isOpen, onClose, initialTab = "login" }: AuthModalProps) {
  const [tab, setTab] = useState<AuthTab>(initialTab);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [loginId, setLoginId] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showLoginPw, setShowLoginPw] = useState(false);

  const [fullName, setFullName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  useEffect(() => {
    if (isOpen) setTab(initialTab);
  }, [isOpen, initialTab]);

  const passwordStrength = useMemo(() => getPasswordStrength(password), [password]);
  const confirmStrength = useMemo(
    () => getConfirmStrength(password, confirmPassword),
    [password, confirmPassword]
  );

  const resetMessages = () => {
    setError("");
    setSuccess("");
  };

  const switchTab = (next: AuthTab) => {
    setTab(next);
    resetMessages();
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    resetMessages();
    setLoading(true);
    try {
      const data = await authFetch("/api/auth/login", {
        loginId,
        password: loginPassword,
        rememberMe,
      });

      const storage = rememberMe ? localStorage : sessionStorage;
      storage.setItem(
        "micrylis_user",
        JSON.stringify(data.data?.user ?? {})
      );

      setSuccess("Welcome back! Login successful.");
      setTimeout(() => {
        onClose();
        setSuccess("");
      }, 1200);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    resetMessages();

    if (!agreedToTerms) {
      setError("Please accept the Terms & Conditions to register.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      await authFetch("/api/auth/signup", {
        name: fullName,
        username,
        mobileNumber: mobile,
        email: email || undefined,
        password,
        confirmPassword,
      });

      setSuccess("Account created successfully! You can sign in now.");
      setTimeout(() => {
        switchTab("login");
        setSuccess("");
      }, 1500);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  const registerDisabled =
    loading ||
    !agreedToTerms ||
    !fullName.trim() ||
    !username.trim() ||
    !mobile.trim() ||
    password.length < 8 ||
    password !== confirmPassword;

  return (
    <div className="modal-overlay auth-modal-overlay" onClick={onClose}>
      <motion.div
        className="modal-content auth-modal no-scrollbar"
        data-tab={tab}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button type="button" className="auth-close" onClick={onClose} aria-label="Close">
          <X size={15} />
        </button>

        <div className="auth-brand">
          <h1 className="auth-brand-title">MICRYLISBIOTECH</h1>
          <p className="auth-brand-tagline">
            Redefining precision for a sustainable future
          </p>
          <h2 className="auth-heading">
            {tab === "login" ? "Welcome Back" : "Create Account"}
          </h2>
          <p className="auth-subheading">
            {tab === "login" ? "Sign in to your account" : "Register in a few quick steps"}
          </p>
        </div>

        <div className="auth-tabs">
          <button
            type="button"
            className={`auth-tab ${tab === "login" ? "active" : ""}`}
            onClick={() => switchTab("login")}
          >
            Login
          </button>
          <button
            type="button"
            className={`auth-tab ${tab === "register" ? "active" : ""}`}
            onClick={() => switchTab("register")}
          >
            Register
          </button>
        </div>

        {error && <div className="auth-error">{error}</div>}
        {success && <div className="auth-success">{success}</div>}

        {tab === "login" ? (
          <form className="auth-form" onSubmit={handleLogin}>
            <div className="auth-field">
              <label>EMAIL OR MOBILE</label>
              <div className="auth-input-wrap">
                <AtSign size={14} className="auth-input-icon" />
                <input
                  type="text"
                  placeholder="you@email.com or 10-digit mobile"
                  value={loginId}
                  onChange={(e) => setLoginId(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="auth-field">
              <label>PASSWORD</label>
              <div className="auth-input-wrap">
                <Lock size={14} className="auth-input-icon" />
                <input
                  type={showLoginPw ? "text" : "password"}
                  placeholder="••••••••"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="auth-toggle-pw"
                  onClick={() => setShowLoginPw((v) => !v)}
                  aria-label="Toggle password"
                >
                  {showLoginPw ? <EyeOff size={14} /> : <Eye size={14} />}
                </button>
              </div>
            </div>

            <div className="auth-options">
              <label className="auth-remember">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                Remember me
              </label>
              <button type="button" className="auth-forgot">
                Forgot password?
              </button>
            </div>

            <button type="submit" className="auth-submit" disabled={loading}>
              {loading ? "Signing in…" : "Sign In →"}
            </button>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleRegister}>
            <div className="auth-row">
              <div className="auth-field">
                <label>FULL NAME</label>
                <div className="auth-input-wrap">
                  <User size={14} className="auth-input-icon" />
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="auth-field">
                <label>MOBILE</label>
                <div className="auth-input-wrap">
                  <Smartphone size={14} className="auth-input-icon" />
                  <input
                    type="tel"
                    placeholder="10-digit number"
                    value={mobile}
                    onChange={(e) =>
                      setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))
                    }
                    required
                    pattern="[6-9][0-9]{9}"
                  />
                </div>
              </div>
            </div>

            <div className="auth-row">
              <div className="auth-field">
                <label>EMAIL (OPTIONAL)</label>
                <div className="auth-input-wrap">
                  <Mail size={14} className="auth-input-icon" />
                  <input
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="auth-field">
                <label>USERNAME</label>
                <div className="auth-input-wrap">
                  <AtSign size={14} className="auth-input-icon" />
                  <input
                    type="text"
                    placeholder="unique_handle"
                    value={username}
                    onChange={(e) =>
                      setUsername(
                        e.target.value.toLowerCase().replace(/[^a-z0-9_]/g, "")
                      )
                    }
                    required
                  />
                </div>
              </div>
            </div>

            <div className="auth-row">
              <div className="auth-field">
                <label>PASSWORD</label>
                <div className="auth-input-wrap">
                  <Lock size={14} className="auth-input-icon" />
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 8 characters"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                  />
                  <button
                    type="button"
                    className="auth-toggle-pw"
                    onClick={() => setShowPassword((v) => !v)}
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                <StrengthBar strength={passwordStrength} />
              </div>
              <div className="auth-field">
                <label>CONFIRM PASSWORD</label>
                <div className="auth-input-wrap">
                  <Lock size={14} className="auth-input-icon" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Repeat password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    className="auth-toggle-pw"
                    onClick={() => setShowConfirmPassword((v) => !v)}
                  >
                    {showConfirmPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>
                <StrengthBar strength={confirmStrength} />
              </div>
            </div>

            <label className="auth-terms">
              <input
                type="checkbox"
                checked={agreedToTerms}
                onChange={(e) => setAgreedToTerms(e.target.checked)}
              />
              <span>
                I agree to the{" "}
                <a href="#terms" onClick={(e) => e.preventDefault()}>
                  Terms &amp; Conditions
                </a>{" "}
                and{" "}
                <a href="#privacy" onClick={(e) => e.preventDefault()}>
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            <button type="submit" className="auth-submit" disabled={registerDisabled}>
              {loading ? "Creating account…" : "Create Account →"}
            </button>
          </form>
        )}

      </motion.div>
    </div>
  );
}
