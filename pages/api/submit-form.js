import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, companyRole, locationType, message } = req.body;

  // Basic validation
  if (!name || !email || !companyRole || !locationType || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Validate email format
  const emailRegex = /^\S+@\S+\.\S+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    await resend.emails.send({
      from: 'testcursorkilo@gmail.com', // Assuming this is verified; adjust as needed
      to: 'contact@echargebot.tech',
      reply_to: email,
      subject: 'New Pilot Form Submission',
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company Role:</strong> ${companyRole}</p>
        <p><strong>Location Type:</strong> ${locationType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    res.status(200).json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}