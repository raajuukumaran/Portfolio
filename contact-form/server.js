const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/send', (req, res) => {
    const { name, email, message } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'rraajuukumaran@gmail.com',
            pass: 'Rajesh..'
        }
    });

    const mailOptions = {
        from: email,
        to: 'rraajuukumaran@gmail.com',
        subject: 'Contact Form Submission',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error occurred');
        }
        res.status(200).send('Message sent successfully');
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
