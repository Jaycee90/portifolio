const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(bodyParser.json());


// Middleware to enable CORS
// Fix cors issue by only including methods i used in my backend code!
app.use(cors(
  {
    Origin: ["https://readhub-murex.vercel.app"],
    methods: ["POST", "PUT"],
    credentials: true
  }
));

// Create a SMTP transporter
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'jturambe@gmail.com',
        pass: 'zuwp ouzg lhzy trxd'
    }
});

app.post('/submit-form', async (req, res) => {
    try {
        const formData = req.body;

        // Compose email message
        const mailOptions = {
            from: formData.email,
            to: 'jturambe@gmail.com', // your email address
            subject: `New Message from ${formData.name}`,
            text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`
        };

        // Send email asynchronously
        await transporter.sendMail(mailOptions);

        // Email sent successfully
        res.status(200).send('Email sent successfully');
    } catch (error) {
        // If any error occurs during sending email
        console.error('Error sending email:', error);
        res.status(500).send('Error sending email');
    }
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


