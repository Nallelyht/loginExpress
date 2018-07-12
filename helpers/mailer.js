const nodemailer = require('nodemailer');
const hbs = require('hbs');
const fs = require('fs');
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
