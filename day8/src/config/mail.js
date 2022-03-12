


const nodemailer = require("nodemailer");


  let transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user:"d3a1cdff222a1a", // generated ethereal user
      pass:"a39e1b8ea59dd0", // generated ethereal password
    },
  });

  // send mail with defined transport object
   

 
module.exports=transporter