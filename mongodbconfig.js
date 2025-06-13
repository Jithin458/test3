const mongoose = require("mongoose");

const connectDb = async ()=>{
try{
await mongoose.connect("mongodb+srv://jithinmp45:jithinmp45@cluster0.ehdcxfm.mongodb.net/test");
console.log("Db connected..");
}catch(err){
console.log(err);
}


}

module.exports = connectDb;