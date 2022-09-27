import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, phone, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "laura.ac.xavier@gmail.com",
      subject: `Contato de ${name}`,
      html: `<p>Você tem uma nova mensagem</p><br>
        <p><strong>E-mail: </strong> ${email}</p><br>
        <p><strong>Mensagem: </strong> ${message}</p><br>
        <p><strong>Telefone: </strong> ${phone}</p><br>
      `
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
};




