const express=require('express');

const { registers } = require('./model/index');

// const { json } = require('sequelize');
// const { DataTypes } = require('sequelize');
const app=express();
const bcrypt = require("bcrypt")

db= require("./model/index");


app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());




app.get("/main",(req,res)=>{
    res.render("auth/main.ejs");


});
// register validation
app.post("/main", async (req,res)=>{
  const {username,email,password}= req.body;

  if(!username||!password||!email){
    return res.send("please enter password");
  }
  const data = await registers.findAll({
    where: {
      email:email
    }
  })
  



  if(data.length>0){
    return res.send("already register email");
  }
  

     await registers.create({
    username,
    password : bcrypt.hashSync( password,10),
    email
  });
  res.send("successful")

})

app.use(express.static("public/css"));

app.listen(3000,()=>{
    console.log("The project has startes at 3000 port");
});