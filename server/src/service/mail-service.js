const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  post: process.env.SMTP_PORT,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const sendActivationMail = async (to, link) => {
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to,
    subject: `Activating the account ${process.env.API_URL}`,
    text: '',
    html:
    `
      <div>
          <h1>To activate your account, follow the link</h1>
          <a href="${link}">${link}</a>
      </div>
    `,
  });
};

module.exports = { sendActivationMail };
