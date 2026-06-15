const { blogs, registers } = require("../model");
const env = require("dotenv").config()

exports.blogGet= (req,res)=>{
    res.render("blog.ejs");

};
exports.blogPost=async (req,res)=>{
   const registerId = req.registersId//relationship data base ko yaa chai middleware bata value aako ho
  const {title,subtitle,description,image} = req.body;
  // console.log(req.file)
  
  const data = await blogs.create({
    title,
    subtitle,
    description,
    image: process.env.serverUrl + req.file.filename,
    registerId:registerId
    
    
  });
  res.redirect("/home");
}



