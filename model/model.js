const mongoose = require("mongoose");
const validator = require("validator");

const loginSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        trim:true
    },
    password:{
        type:String,
        required:true,
        trim:true,
        minlength:7,
        minLowercase:1,
        minUppercase:1,
        minNumbers:1,
        minSymbols:1
    }
})

const login = mongoose.model("loginData",loginSchema);

module.exports = login;
