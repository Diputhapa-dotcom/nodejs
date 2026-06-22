const express = require("express");
const { registerGet, registerPost } = require("./controller/registerController");
const { loginGet, loginPost } = require("./controller/loginController");
const { blogGet, blogPost } = require("./controller/blogController");
const multer = require("multer");
const { storage } = require("./middleware/files");
const { seeGet } = require("./controller/seemoreController");
const { deleteGet } = require("./controller/deleteController");
const { homeGet } = require("./controller/homeController");
const { updateGet, updatePost } = require("./controller/updateController");
const { isAuthenticate } = require("./middleware/isAuthenticate");
const app = express();
const cookieParser = require("cookie-parser");
const { forgotGet, forgotPost } = require("./controller/forgotPasswordController");
const { otpGet, otpPost } = require("./controller/otpverificationController");
const { resetGet, resetpost } = require("./controller/resetpasswordController");
// const { render } = require("ejs");

require("./model");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const files = multer({storage:storage});
app.use(cookieParser());


//ccokie parser tala rakhni kina vaney yo middleware ho
app.use((req,res,next)=>{
    res.locals.currentuser = req.cookies.token;
    next();
});

app.get("/register",registerGet);
app.post("/register",registerPost);
app.get("/login",loginGet);
app.post("/login",loginPost)
app.get("/blog",blogGet);
app.post("/blog",files.single("image"),isAuthenticate,blogPost);
app.get("/seemore/:id",seeGet);
app.get("/delete/:id",isAuthenticate,deleteGet);
app.get("/home",homeGet);
app.get("/update/:id",updateGet);
app.post("/update/:id",files.single("image"),updatePost);
app.get("/forgotpassword",forgotGet);
app.post("/forgotpassword",forgotPost);
app.get("/otpverification",otpGet);
app.post("/otpverification/:id",otpPost);
app.get("/resetpassword",resetGet);
app.post("/resetpassword/:email/:otp",resetpost);










app.use(express.static("./files/"));
const port = 3000;
app.listen(port,()=>{
    console.log("The project has started at port",port)
})