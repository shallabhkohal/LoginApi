const express = require("express");
const router = require("./routes/user")

const app = express();

app.use(express.json());

app.use(router)

app.listen(process.env.port || 3500 ,()=>{
    console.log("connection succesfull")
})