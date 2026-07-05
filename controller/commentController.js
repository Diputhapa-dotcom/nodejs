const { where } = require("sequelize");
const { comments } = require("../model");

exports.commentPost = async (req,res)=>{
    const registerid = req.registerId;
    console.log(registerid)

   const {comment,blogID} = req.body;
  console.log(req.body)
  console.log(blogID)
   if(!registerid||!blogID||!comment){
    return res.send("please enter registerid,blogid and comment");
   }
const cmnt = await comments.create({
    commentMessage :comment,
    registerId:registerid, //middleware ko
    blogId:blogID

})
res.redirect("/seemore/"+blogID);
}