// server.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors()); // Enable CORS
app.use(bodyParser.json()); // Parse JSON bodies

// Email sending endpoint
app.post('/send-verification-email', (req, res) => {
    const { email, verificationCode } = req.body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
        service: 'Gmail', // Example: using Gmail
        auth: {
            user: 'modulesync@gmail.com', // Replace with your email
            pass: 'Thabiso@12', // Replace with your email password or app password
        },
    });

    // Email content
    const mailOptions = {
        from: 'modulesync@gmail.com',
        to: email,
        subject: 'Your Verification Code',
        text: `Hello,\n\nYour verification code is 20123\nEnjoy ModuleSync: ${verificationCode}\n\nThank you!`,
    };

    // Send email
    transporter.sendMail(mailOptions, (error) => {
        if (error) {
            return res.status(500).send('Error sending email');
        }
        res.status(200).send('Email sent successfully');
    });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
