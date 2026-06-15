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

require("./model");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const files = multer({storage:storage});
app.use(cookieParser());





app.get("/register",registerGet);
app.post("/register",registerPost);
app.get("/login",loginGet);
app.post("/login",loginPost)
app.get("/blog",blogGet);
app.post("/blog",files.single("image"),isAuthenticate,blogPost);
app.get("/seemore/:id",seeGet);
app.get("/delete/:id",deleteGet);
app.get("/home",homeGet);
app.get("/update/:id",updateGet);
app.post("/update/:id",files.single("image"),updatePost);














app.use(express.static("./files/"));
const port = 3000;
app.listen(port,()=>{
    console.log("The project has started at port",port)
})