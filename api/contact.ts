import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_TH7G4zxC_3zh7o4zrGr8G4HWL2q8HMXK3');

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, mobile, message } = req.body;

    // Send notification email to you
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'contact@micrylisbiotech.com',
      subject: 'New Contact Form Submission - Micrylis Biotech',
      text: `Name: ${name}\nEmail: ${email}\nMobile: ${mobile}\nMessage: ${message}`,
    });

    // Send auto-reply to user
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: 'Thank you for contacting Micrylis Biotech',
      text: `Thank you ${name}, we received your message and will reply within 24 hours. - Team Micrylis Biotech`,
    });

    return res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error("Resend Error:", error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
