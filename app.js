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

  if(!username||!email||!password){
    return res.send("please provide username,email,password");
  };
  


  const data = await registers.findAll({ 
    where: {
      email:email //comparing database email and user email if there is same email then it return 1 
    }
  });
  if(data.length>0){ //the above 1 is compare below if the consition is true then it shows existed else move to the next line
    res.send("the email already been existed");
  };

   

    await registers.create({  //after false then it insert the comming data into database
    username,
    password : bcrypt.hashSync( password,10),
    email
  });
  res.send("successful");


})



app.get("/login",(req,res)=>{
  res.render("auth/login.ejs");
});
app.post("/login",(req,res)=>{
  const {email,password}=req.body;
  if(!email||!password){
    return res.send("please enter email and password");
  }

  
  //email check
   
  



})






app.use(express.static("public/css"));

app.listen(3000,()=>{
    console.log("The project has startes at 3000 port");
});