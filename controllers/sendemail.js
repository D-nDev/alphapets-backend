require("dotenv").config();
const templatepass = require("../templates/resetpass");
const fs = require("fs");
const nodemailer = require("nodemailer");

function sendEmail(email, token, browser, os, os_version, ip) {
    return new Promise((resolve, reject) => {
        fs.readFile("users.json", (err, data) => {
            if (err) throw err;
            const user = JSON.parse(data);

            const email_object = user.map((element) => {
                return element.email;
            });

            const find_email = email_object.indexOf(email);
            const user_name = user[find_email].name;
            const transporter = nodemailer.createTransport({
                name: "smtp.gmail.com",
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: process.env.EMAIL, // your email in .env(recommended gmail)
                    pass: process.env.EMAIL_PASS, // your password in .env
                },
                logger: true,
                debug: true,
            });
            const mailOptions = {
                to: `${email}`,
                subject: "Your reset code to AlphaPets",
                html: templatepass.resetTemplate(
                    token,
                    user_name,
                    browser,
                    os,
                    os_version,
                    ip
                ),
            };
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(true); // send back to the app.js, in order to send something to the front-end or whatever else
                }
            });
        });
    });
}

module.exports = {
    sendEmail,
};
