const { where } = require("sequelize");
const { blogs, registers, comments } = require("../model");

exports.seeGet =async (req,res)=>{
    const id=req.params.id;
    const data= await blogs.findByPk(id,{
        include:{
            model:registers
        }
    });
   const comment = await comments.findAll({
        where:{
            blogId:id
        }
    })
    res.render("singleBlog.ejs",{data:data,comment:comment});
}