const { blogs } = require("../model");
const env = require("dotenv").config()

exports.blogGet= (req,res)=>{
    res.render("blog.ejs");

};
exports.blogPost=async (req,res)=>{
  const {title,subtitle,description,image} = req.body;
  console.log(req.file)
  
  const data = await blogs.create({
    title,
    subtitle,
    description,
    image: process.env.serverUrl + req.file.filename
    
    
  });
  res.redirect("/home")
}