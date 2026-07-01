const { where } = require("sequelize");
const { registers } = require("../model");
const bcrypt = require("bcrypt");
const jwt= require("jsonwebtoken")

exports.loginGet= (req,res)=>{
    res.render("login.ejs");
}
exports.loginPost= async (req,res)=>{
  const{email,password} = req.body;
  if(!email || !password){
    return res.send("please enter email and password");
  }
  const data = await registers.findAll({
    where:{
        email:email
    }
  });
if(data.length>0){
  console.log(data[0].password)
  const isPasMatch = bcrypt.compareSync(password,data[0].password);
  if(isPasMatch){  

    const token = jwt.sign({id:data[0].id},"secretpassword",{expiresIn:"1d"});   // token generate
    res.cookie("token",token);
    res.redirect("/blog")
  }

      else{
    res.send("incorrect password");
  }
}else{
  res.send("invalid email");
}
}