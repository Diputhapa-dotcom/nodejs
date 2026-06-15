const { registers } = require("../model");
const bcrypt= require("bcrypt")

exports.registerGet=(req,res)=>{
    res.render("register.ejs")

}
exports.registerPost=async (req,res)=>{
const {username,email,password} = req.body;
if(!username|| !email || !password){
    return res.send("pleade filled up the requirement");
}
 await registers.create({
    username,
    email,
    password : bcrypt.hashSync(password,10)
});
res.send("successful");
}
