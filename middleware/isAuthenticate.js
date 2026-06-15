const jwt = require("jsonwebtoken");
const { registers } = require("../model");
const promisify = require("util").promisify;
// const env = require("dotenv").config();


exports.isAuthenticate = async (req,res,next)=>{
    const token = req.cookies.token;
    if(!token || token===null || token===undefined){
     return res.redirect("/login");
    }
        const verifyResult = await promisify(jwt.verify)(token,process.env.password);
        req.registerId = verifyResult.id;
        next()
}