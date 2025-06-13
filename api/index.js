const express = require("express");
const cors = require("cors");
const connectDb  =  require('../mongodbconfig.js');
const User = require("../Mongodbmodel/userschema.js");

const app = express();

app.use(cors());
app.use(express.json());
connectDb();


app.get("/",(req,res)=>{


res.json({msg:"Hello there"})
});

app.post("/postUser",async(req,res)=>{
const name = req.body.name;
const email = req.body.email;
const password = req.body.password;
const user  = new User({
    name:name,
    email:email,
    password:password
});
await user.save();

res.json({msg:"Data uploaded"});
});


app.listen(8080,()=>{
    console.log("running....");
});