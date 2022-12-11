const nodemailer = require("nodemailer");

export default function sendEmail(req, res) {
  const { name, email, phone, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.USERMAIL,
      pass: process.env.PASSMAIL
    }
  })

  transporter.sendMail({
    from: email,
    replyTo: `${name}, ${email}`,
    to: `${name}, ${email}`,
    subject: "Contato via Website",
    html: `
      <h1>Contato via Website</h1>
      <p>
        <strong>Nome:</strong>: ${name}<br />
        <strong>E-mail:</strong>: ${email}<br />
        <strong>Telefone:</strong>: ${phone}<br />
        <strong>Mensagem</strong>: <br />
        ${message}
      </p>
    `,
  }).then((response) => { res.send(response) })
    .catch((error) => { res.send(error) })

}


