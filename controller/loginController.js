
const bcrypt = require("bcrypt");
const { registers } = require("../model");
const { where } = require("sequelize");

 exports.rendermain=(req,res)=>{
    res.render("auth/main.ejs");
    
}

exports.renderlogin = async (req,res)=>{
  res.render("auth/login.ejs");
};






// register controller

exports.registersController=async (req,res)=>{
  const {username,email,password}= req.body;

  if(!username||!email||!password){
    return res.send("please provide username,email,password");
  };
  


  const data = await registers.findAll({ //it return in array[]
    where: {
      email:email //comparing database email and user email if there is same email then it return 1 
    }
  });
  if(data.length>0){ //the above 1 is compare below if the condition is true then it shows existed else move to the next line
    return res.send("the email already been existed");
  }

    await registers.create({  //after false then it insert the comming data into database
      username,
      password : bcrypt.hashSync( password,10),
      email
    });
  
  res.send("successful");


}

 exports.postlogin =async (req,res)=>{
  const {email,password}=req.body;
  if(!email||!password){
    return res.send("please enter email and password");
  }
  
  const data= await registers.findOne({
    where: {
      email:email
      
    }
  })
  if(data){
    
    // console.log(user)
    const isMatched = bcrypt.compareSync(password,data.password);
    if(isMatched){
      jwt.sign({id:data.id},'password',{
        expiresIn:'30d'
      })
      
    } else {
      res.send("invalid email or password");
    }
  //  return res.send("already existed with that email")
  //passwprd checking
  
}

else{
  res.send("no user with that email");
}

};










