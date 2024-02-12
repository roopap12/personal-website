// const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');
// const cors = require('cors');

// const app = express();
// const PORT = 3001; // You can use any port you prefer

// Middleware to parse JSON
// app.use(bodyParser.json());
// const corsOptions = {
//   origin: 'http://localhost:3000', // Replace with your frontend URL
//   methods: 'POST',
//   credentials: true,
//   optionsSuccessStatus: 204,
// };

// app.use(cors(corsOptions));

// Nodemailer configuration
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: 'patelroopa148@gmail.com', // Your Gmail email address
//     pass: 'Rp12@1964', // Your Gmail email password (consider using an app password for security)
//   },
// });

// // API endpoint to handle form submissions
// app.post('/submitForm', async (req, res) => {
//   const { name, email, message } = req.body;

//   Nodemailer options
//   const mailOptions = {
//     from: 'patelroopa148@gmail.com',
//     to: 'patelroopa148@gmail.com', // Replace with your actual email address
//     subject: 'New Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
//   };

//   try {
//     Send email
//     await transporter.sendMail(mailOptions);
//     console.log('Email sent successfully!');
//     res.status(200).json({ success: true });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     res.status(500).json({ success: false, error: 'Error sending email', details: error.message });
//   }
// });

// Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
