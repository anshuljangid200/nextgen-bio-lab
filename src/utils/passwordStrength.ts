export type StrengthLevel = {
  score: number;
  label: string;
  color: string;
  percent: number;
};

export function getPasswordStrength(password: string): StrengthLevel {
  if (!password) {
    return { score: 0, label: "", color: "#d1d5db", percent: 0 };
  }

  let score = 0;
  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^a-zA-Z0-9]/.test(password)) score++;

  const levels: StrengthLevel[] = [
    { score: 0, label: "Very weak", color: "#b91c1c", percent: 20 },
    { score: 1, label: "Weak", color: "#dc2626", percent: 35 },
    { score: 2, label: "Fair", color: "#d97706", percent: 50 },
    { score: 3, label: "Good", color: "#ca8a04", percent: 70 },
    { score: 4, label: "Strong", color: "#16a34a", percent: 85 },
    { score: 5, label: "Very strong", color: "#15803d", percent: 100 },
  ];

  const index = Math.min(score, levels.length - 1);
  return { ...levels[index], score };
}

export function getConfirmStrength(
  password: string,
  confirmPassword: string
): StrengthLevel & { matches: boolean } {
  if (!confirmPassword) {
    return { score: 0, label: "", color: "#d1d5db", percent: 0, matches: false };
  }

  const base = getPasswordStrength(confirmPassword);
  const matches = password === confirmPassword && password.length > 0;

  if (!matches) {
    return {
      ...base,
      label: base.label ? `${base.label} · No match` : "No match",
      color: "#b91c1c",
      matches: false,
    };
  }

  return {
    ...base,
    label: `${base.label || "Matched"} · Confirmed`,
    color: "#15803d",
    matches: true,
  };
}
