const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const randomstring = require('randomstring');

const app = express();
const port = 3000;

// Create an Express application
app.use(bodyParser.json());

// Create a Nodemailer transporter with your email credentials
// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'preeti.kamble@cumminscollege.in',
//     pass: 'pk@23'
//   }
// });

const otpDatabase = new Map();

app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;

  // Check if the provided OTP matches the one in the database.
  const storedOTP = otpDatabase.get(email);

  if (storedOTP && storedOTP === otp) {
    // If the OTP matches, remove it from the database (to prevent reuse) and mark the user as verified.
    otpDatabase.delete(email);
    res.status(200).json({ message: 'OTP is valid. User is verified!' });
  } else {
    res.status(400).json({ message: 'OTP is invalid. Please try again.' });
  }
});


// Endpoint to generate OTP and send it to the specified email
app.post('/send-otp', (req, res) => {
  const { email } = req.body;
  const generatedOTP = randomstring.generate(6); // Generate a 6-digit OTP

  const mailOptions = {
    from: 'pskamble0777@gmail.com',
    to: email,
    subject: 'Your OTP',
    text: `Your OTP is: ${generatedOTP}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).json({ message: 'Error sending OTP' });
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).json({ message: 'OTP sent successfully' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
