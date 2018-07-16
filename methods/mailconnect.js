const nodemailer = require('nodemailer');
const config= require('../config.json');
const _emailtemplate=require('./email_template');
const _mailer=(email,password,message)=>{


var transporter = nodemailer.createTransport({
    host:config.mail_host,
    auth: {
        type: 'login',
        user: config.mail_user,
        pass: config.mail_password,
        clientId:config.mail_clientId,
        clientSecret:config.mail_clientSecret,
        refreshToken:config.mail_refreshToken 
    }
});

var mailOptions = {
    to: email,
    subject:config.mail_subject,
    html: _emailtemplate(config.test_link,email,message,password)
  
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    res.send('Mail sent');
});


}
module.exports=_mailer;