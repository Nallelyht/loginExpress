const nodemailer = require('nodemailer');
const hbs = require('hbs');
const fs = require()
const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.gmail,
    pass: process.env.gmailPass 
  }
});

exports.sendWelcomeMail = (user)=>{
  const data = {
    from: '"Hola 👻" <nallelyht@gmail.com>',
    to: user.email, 
    subject: `Hola ${user.name}`, 
    text: 'Awesome Message',
   // html: '<b>Awesome Message</b>'
  }
  transporter.sendMail(data)
  .then(info => console.log(info))
  .catch(error => console.log(error))
}
exports.sendWelcomeMail = (user)=>{
  const data = {
    from: '"Hola 👻" <nallelyht@gmail.com>',
    to: user.email, 
    subject: `Hola ${user.name}`, 
    text: 'Awesome Message',
   // html: '<b>Awesome Message</b>'
  }
  transporter.sendMail(data)
  .then(info => console.log(info))
  .catch(error => console.log(error))
}