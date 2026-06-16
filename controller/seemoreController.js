const { blogs, registers } = require("../model");

exports.seeGet =async (req,res)=>{
    const id=req.params.id;
    const data= await blogs.findByPk(id,{
        include:{
            model:registers
        }
    });
    res.render("singleBlog.ejs",{data:data});
}