const { where } = require("sequelize");
const { blogs } = require("../model");

exports.deleteGet = async (req,res)=>{
   const id = req.params.id;
  await blogs.destroy({
    where:{
      id:id
    }
   });
   res.redirect("/home");

}
