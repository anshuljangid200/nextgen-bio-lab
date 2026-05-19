const MOBILE_REGEX = /^[6-9]\d{9}$/;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function parseLoginId(loginId) {
  const value = String(loginId || "").trim();
  if (!value) return { type: "empty", value: "" };
  if (MOBILE_REGEX.test(value)) return { type: "mobile", value };
  if (EMAIL_REGEX.test(value))
    return { type: "email", value: value.toLowerCase() };
  return { type: "username", value: value.toLowerCase() };
}

async function findUserByLoginId(User, loginId) {
  const parsed = parseLoginId(loginId);
  if (!parsed.value) return null;

  if (parsed.type === "mobile") return User.findOne({ phone: parsed.value });
  if (parsed.type === "email") return User.findOne({ email: parsed.value });
  return User.findOne({ username: parsed.value });
}

const databaseNotReadyResponse = {
  success: false,
  code: "DATABASE_NOT_CONFIGURED",
  message:
    "Login and registration will be enabled soon. For now, please use Contact Us.",
};

module.exports = {
  MOBILE_REGEX,
  EMAIL_REGEX,
  parseLoginId,
  findUserByLoginId,
  databaseNotReadyResponse,
};
