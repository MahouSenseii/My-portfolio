const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config();
// Email credentials should be provided via environment variables

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.post('/send', async (req, res) => {
    let data = req.body;

    let transporter = nodemailer.createTransport({
        host: 'm07.internetmailserver.net',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    let mailOptions = {
        from: data.email,
        to: 'davisq1991@gmail.com',
        subject: `Message from ${data.name}`,
        html: `
            <p>${data.message}</p>
            <p>From: ${data.name} (${data.email})</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully!");
    } catch (error) {
        res.status(500).send("Failed to send email!");
    }
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});
