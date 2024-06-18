const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shallabhrajput9:rZg2T82wQLCAcZya@cluster0.zedyyix.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",{

}).then(()=>{
    console.log("connectiion succesfull")
}).catch((err)=>{
    console.log("no connection",err)
})