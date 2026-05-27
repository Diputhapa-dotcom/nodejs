const express=require("express");
const app=express();


// to make html environment 
app.set("view engine","ejs")

app.get("/login",(req,res)=>{
    const name="dipu thapa"
    res.render("login.ejs");
});

app.get("/login",(req,res)=>{
    res.render("login.ejs")
})


// attaching external css
app.use(express.static('public/css/'))


app.listen(3000,()=>{
    console.log("The project has startes at port 3000");
})