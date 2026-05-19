const { Resend } = require("resend");

async function sendAdminNotification(subject, html) {
  const apiKey = process.env.RESEND_API_KEY;
  const adminEmail =
    process.env.ADMIN_EMAIL || "contact@micrylisbiotech.com";

  if (!apiKey) {
    console.warn("RESEND_API_KEY missing — skipping admin email");
    return;
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from: process.env.RESEND_FROM || "onboarding@resend.dev",
    to: adminEmail,
    subject,
    html,
  });
}

module.exports = { sendAdminNotification };
