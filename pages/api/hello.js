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
    to: process.env.USERMAIL,
    subject: `Contato do site de ${name}`,
    html: `<p><strong>Você tem uma nova mensagem do site</strong></p><br>
        <p><strong>E-mail: </strong> ${email}</p><br>
        <p><strong>Mensagem: </strong> ${message}</p><br>
        <p><strong>Telefone: </strong> ${phone}</p><br>`
  }).then((response) => { res.send(response) })
    .catch((error) => { res.send(error) })

}