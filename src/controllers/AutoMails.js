// Requires
const { DATE } = require("sequelize");
const db = require("../database/models");
require("datejs");
const ejs = require("ejs");
const nodemailer = require('nodemailer');

const AutoMails = async function () {
    let today = new Date();
    today.setHours(-3,0,0)
    let users = await db.abmusers.findAll({
        where: {
            userduedate: today
        }
    })
    if (users != "") {
        // EMAIL       
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            secure: process.env.MAIL_ENCRYPT,
            port: process.env.MAIL_PORT,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            },
        });

        const Template = await ejs.renderFile("src/mailer/templates/ABM_duedate.ejs", { users });

        var mainOptions = {
            from: '"ABM-Usuarios" <consultas.eticas.rtp@gmail.com>',
            to: "luciano.segura@rtp.com.ar",
            subject: "Hoy vencen usuarios de red",
            html: Template,
        };

        transporter.sendMail(mainOptions, function (err, info) {
            if (err) {
            console.log(err);
            } else {
            console.log("Message sent: " + info.response);
            }
        });
    }}

module.exports = AutoMails;