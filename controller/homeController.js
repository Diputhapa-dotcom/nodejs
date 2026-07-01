// const { resolveInclude } = require("ejs");
const { blogs, registers } = require("../model");

exports.homeGet = async (req,res)=>{
    const items = await blogs.findAll({
     include:{
      model:registers
          
     }
    });
    console.log(items)
  res.render("home.ejs",{items:items});
}