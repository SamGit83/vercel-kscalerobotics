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

  // Log the submission (in a real app, send email)
  console.log('Form submission:', { name, email, companyRole, locationType, message });

  // Simulate success
  res.status(200).json({ message: 'Form submitted successfully' });
}