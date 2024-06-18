const express = require("express");
const router = express.Router();

const user = require("../model/model")

router.post("/login",(req,res)=>{
    try{
        const userRec= new user(req.body);
        console.log(req.body);
        const insrtUser = userRec.save();
        res.send(insrtUser).status(201);
    }catch(err){
        res.status(400).send(err)
    }
})

router.get("/fetch/:id",async(req,res)=>{
    try{
        const fetchUser = await user.findById(req.params.id);
        res.send(fetchUser).status(201)
    }catch(err){
        res.send(err).status(400)
    }
})

router.patch("/update/:id",async (req,res)=>{
    try{
        const updateUser = await user.findByIdAndUpdate(req.params.id);
        res.send(updateUser).status(201)
    }catch(err){
        res.send(err).status(400)
    }
})

router.delete("/delete/:id",(req,res)=>{
    try{
        const deleteUser = user.findByIdAndDelete(req.params.id);
        res.send(deleteUser).status(201)
    }catch(err){
        res.send(err).status(400)
    }
})

module.exports = router;