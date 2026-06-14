const { blogs } = require("../model");

exports.homeGet = async (req,res)=>{
    const items = await blogs.findAll();
  res.render("home.ejs",{items:items});
}