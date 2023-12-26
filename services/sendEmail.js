const nodemailer = require("nodemailer");
require("dotenv").config();

const { BREVO_SMTP_KEY } = process.env;

const nodemailerConfig = {
  host: "smtp-relay.brevo.com",
  port: 587,
  auth: {
    user: "olkoks000@gmail.com",
    pass: BREVO_SMTP_KEY,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async (data) => {
  const email = { ...data, from: "olkoks@meta.ua" };
  await transport.sendMail(email);
  return true;
};

module.exports = sendEmail;
