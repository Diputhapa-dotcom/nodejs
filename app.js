const express=require('express');

const { registers } = require('./model/index');

// const { json } = require('sequelize');
// const { DataTypes } = require('sequelize');
const app=express();

db= require("./model/index");


app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());




app.get("/main",(req,res)=>{
    res.render("auth/main.ejs");


});

app.post("/main", async (req,res)=>{
   const {username,email,password}= req.body;

     await registers.create({
    username,
    email,
    password
  })
})

app.use(express.static("public/css"));

app.listen(3000,()=>{
    console.log("The project has startes at 3000 port");
});