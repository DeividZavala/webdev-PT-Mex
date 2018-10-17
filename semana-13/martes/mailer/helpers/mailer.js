const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth:{
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

exports.send = (options) => {
    const mailOptions = {
        from: "👾El mero mero👾 <noreply@deividelmeromero.com>",
        to: options.email,
        subject: options.subject,
        text: options.message,
        html: `<h1>${options.message}</h1>`
    };
    return transporter.sendMail(mailOptions);
};