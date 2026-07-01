const { where } = require("sequelize");
const { registers } = require("../model");
const bcrypt = require("bcrypt");

exports.resetGet = (req,res)=>{
    const {email,otp} = req.query;
    if(!email||!otp){
       return  res.send("please provide email and otp");
    }
    res.render("resetpassword.ejs",{email,otp});
}
exports.resetpost=async (req,res)=>{
const {email,otp} = req.params;
  const {newpassword,newpasswordconfirm} = req.body;
  if(newpassword !==newpasswordconfirm){
   return res.send("please enter same newpassword and confirmationpassword");
  }
  const userData = await registers.findAll({
    where:{
        email,
        otp
    }
  });
  if(userData.length ===0){
    return res.send("no user with that email and otp")
  }
 await registers.update({
    password: bcrypt.hashSync(newpassword,10)
  },{
    where:{
        email:email
    }
});
res.send("changed password successfully");
}