const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
res.json({msg:"Hello there"})
});

app.post("/postdata",(req,res)=>{
const name = req.body.name +" doe";
res.json({name});
});
app.post("/data1",(req,res)=>{
const name = req.body.name +" doe";
res.json({name});
});

app.listen(8080,()=>{
    console.log("running....");
});