const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAILER_HOST,
  port: process.env.EMAILER_PORT,
  secure: false,
  auth: {
    user: process.env.EMAILER_EMAIL,
    pass: process.env.EMAILER_PASS,
  },
});

module.exports = transporter