const { where } = require("sequelize");
const { registers } = require("../model");

exports.otpGet=(req,res)=>{
    const email = req.query.email;
    // console.log(email)
    
    res.render("verifyotp.ejs",{email:email});
}
exports.otpPost =async (req,res)=>{
const email = req.params.id;
   console.log(email)
    const {otp} = req.body;
    console.log(otp)
  const data = await registers.findAll({
    where:{
        email:email,
        otp:otp
    }
  })
  if(data.length===0){
     return res.send("incorrect otp");
    }
        res.send("correct otp")
    
}