const nodemailer = require("nodemailer");
async function sendmail(data){
   const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
      user:process.env.email,
      pass:process.env.pass
    }
    })
    const message ={
        from:process.env.email,
        to:data.email,
        subject:data.subject,
        text:data.text
    }
    await transporter.sendMail(message); //gmail ma janxa mathi ko message
} 
module.exports = sendmail