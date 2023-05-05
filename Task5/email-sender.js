
const nodemailer = require('nodemailer');
const Mail = require('nodemailer/lib/mailer');
require ("dotenv").config()

let transporter = nodemailer.createTransport({  
   host: 'smtp.gmail.com',
   port: 587,

  auth: {  
    user:process.env.email,
    pass:process.env.password}
});
let mail = {  
  from: process.env.email,  
  to: process.env.email,  
  subject: 'My first email !',  
  text: 'This email was sent with Nodejs and nodemailer using gmail SMTP server' };


  transporter.sendMail(mail, (error, info) => {  
    if (error) {  
      console.log(error);  
    } else {  
      console.log('Email: ' + info.response);  
    }  
  });
  







