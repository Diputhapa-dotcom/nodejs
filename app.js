const express = require('express');
const app=express();

// const { registers } = require('./model/index');
// const bcrypt = require("bcrypt");
// const { where } = require('sequelize');
const db= require("./model/index");
const jwt=require("jsonwebtoken");
const { rendermain, loginController,registersController,renderlogin} = require('./controller/loginController');


app.set('view engine','ejs');
app.use(express.urlencoded({ extended: true}));
app.use(express.json());



// render register
app.get("/main",rendermain);
//render login page
app.get("/login",renderlogin);


app.post("/main",registersController)

app.post("/login",loginController);



app.use(express.static("public/css"));

app.listen(3000,()=>{
    console.log("The project has startes at 3000 port");
});
