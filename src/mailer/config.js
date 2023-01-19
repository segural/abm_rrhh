const nodemailer = require("nodemailer");

async function main() {
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "luciano.g.segura@gmail.com",
      pass: "urjgvaxhusvcynbe"
    },
  });

  let info = await transporter.sendMail({
    from: '"Prueba Adama" <luciano.g.segura@gmail.com>', // sender address
    to: "luciano_segura@hotmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    html: "<b>Hello world?</b>", // html body
  });
}

main().catch(console.error);