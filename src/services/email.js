const nodemailer = require('nodemailer');
const SantaList = require(`../models/santaList`);

// 15s timer
const TIME_INTERVAL = 15000;


const start = async () =>
    setInterval(async () => {
        const [email, _] = await SantaList.get_email();
        if (email.length > 0) {
            sendMessage(email[0]);
        }
    }, TIME_INTERVAL);


const sendMessage = async (data) => {
    try {
        const smtpConfig = {
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            }
        };

        let transport = nodemailer.createTransport(smtpConfig);

        const mailOptions = {
            from: 'do_not_reply@northpole.com',
            to: 'santa@northpole.com',
            subject: 'Pending Wishes!',
            html: `<html>${data.message}</html>`
          };
    

          transport.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
                SantaList.update_email_status(data.id);
            }
        })

    } catch (e) {
        console.log(e);
    }
}

module.exports = { start };
