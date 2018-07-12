const nodemailer = require('nodemailer');
const hbs = require('hbs');
const fs = require('fs');
<<<<<<< HEAD
const transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: {
		user: process.env.gmail,
		pass: process.env.gmailPass
	}
});

const wellcomeCompile = hbs.compile(fs.readFileSync((__dirname, '../views/welcome.hbs'), 'utf8'));

exports.sendWelcomeMail = (user) => {
	const data = {
		from: '"Hola 👻" <nallelyht@gmail.com>',
		to: user.email,
		subject: `Hola ${user.name}`,
		//text: 'Awesome Message'
		html: wellcomeCompile(user)
	};
	transporter.sendMail(data).then((info) => console.log(info)).catch((error) => console.log(error));
};
=======

const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.gmail,
      pass: process.env.gmailPass
    }
  });

exports.sendWelcomeMail = (user)=>{
    const data = {
        from: 'Kiubo? 👻 <fixtergeek@gmail.com>',
        to: user.email, 
        subject: 'Probando esta', 
        text: `Hola ${user.username} Bienvenido a nuestra ironApp`,
        //html: '<b>Awesome Message</b>'
      }
    transporter.sendMail(data)
      .then(info => console.log(info))
      .catch(error => console.log(error))
}

const welcomeCompile = hbs.compile(fs.readFileSync((__dirname, './views/welcome.hbs'), 'utf8'));

exports.sendTemplate = (user) => {
    const data = {
        from: 'Kiubo? 👻 <fixtergeek@gmail.com>',
        to: user.email, 
        subject: 'Probando esta', 
        //text: `Hola ${user.username} Bienvenido a nuestra ironApp`,
        html: welcomeCompile(user)
      }
    transporter.sendMail(data)
      .then(info => console.log(info))
      .catch(error => console.log(error))
} ;
>>>>>>> 27d5ec37c8e6cf1ebf669522585fb811e6b6447d
