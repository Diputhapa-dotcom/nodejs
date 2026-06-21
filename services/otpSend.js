const { text } = require("express");
const nodemailer = require("nodemailer");
const { from_array } = require("promisify/pstream");
const { Transaction } = require("sequelize");
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