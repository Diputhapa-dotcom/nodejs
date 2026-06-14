const { blogs } = require("../model");

exports.seeGet =async (req,res)=>{
    const id=req.params.id;
    const data= await blogs.findByPk(id);
    res.render("singleBlog.ejs",{data:data});
}