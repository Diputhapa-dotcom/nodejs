const { where } = require("sequelize");
const { blogs } = require("../model");
const env = require("dotenv").config()

exports.updateGet = async (req,res)=>{
   const id = req.params.id;
    res.render("update.ejs",{id:id});

}
exports.updatePost = async (req,res)=>{
    console.log(req.body)
    const {title,subtitle,description,image}=req.body;
const id = req.params.id;
   await blogs.update({
           title,
           subtitle,
           description,
           image: process.env.serverUrl + req.file.filename
     },{

         where:{
             id:id
            }
});
     res.redirect("/home");
}