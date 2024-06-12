const sendgrid = require('@sendgrid/mail');

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(403).send('There was a problem with your submission, please try again.');
    return;
  }

  try {
    // Extract and sanitize input
    const name = String(req.body.name).trim();
    const email = String(req.body.email).trim();
    const company = String(req.body.company).trim();
    const interests = String(req.body.interests).trim();
    const message = String(req.body.message).trim();
    
    // Compose the email details
    const recipient = 'tylerp@jmalogos.com'; // Specify the recipient email
    const subject = `New contact from ${name}. Company: ${company}`;
    const email_content = `Name: ${name}\nEmail: ${email}\n\nCompany: ${company}\n\nInterests:${interests}\n\nMessage:\n${message}\n`;
    const email_headers = {
      to: recipient,
      from: `${name} <${email}>`, // Must be a verified sender email in SendGrid
      subject: subject,
      text: email_content
    };

    // Send the email
    await sendgrid.send(email_headers);
    res.status(200).send('Thank You! Your message has been sent.');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Oops! Something went wrong and we couldn\'t send your message.');
  }
};
