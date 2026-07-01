const { text } = require("express");
const sendmail = require("../services/otpSend");
const { registers } = require("../model");
// const { where } = require("sequelize");

exports.forgotGet =(req,res)=>{
 
    res.render("forgotPassword.ejs");
}
exports.forgotPost=async (req,res)=>{
    const {email} = req.body;
   
    if(!email){
        return  res.send("please enter email");
    }
    //respective email rakhna ko lagi jaba hamla galat email halxam jun chai register vako xaena 
    const userData = await registers.findAll({
        where:{
            email:email
        }
    })
    if(userData===0){
        return res.send("no user with that email");
    }
    const otp = Math.floor(1000 + Math.random()*9999);
    console.log(otp)
    
    const data = {
        email:email,
        subject:"forgot password",
        text:"your otp is:" + otp 
    }
    await sendmail(data); //function call gareko
    userData[0].otp = otp; //userdata vitra otp haleko
    userData[0].otpGenerateTime =Date.now()
    await userData[0].save()  //save is essential natra database ma save hudaina ram ma matra save hunxa ra yedi ctr + c gareu vaney tyo otp jatti urcha
    res.redirect("/otpverification?email=" + email); //yo email chat get wala ma janxa kina vaney hamla database bata jhikera pthako haina button thichera matra pthako
}