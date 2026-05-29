const express=require('express');
const app=express();

require("./model/index");

app.set('view engine','ejs');

app.get("/main",(req,res)=>{
    res.render("auth/main.ejs");

});

app.use(express.static("public/css"));

app.listen(3000,()=>{
    console.log("The project has startes at 3000 port");
});