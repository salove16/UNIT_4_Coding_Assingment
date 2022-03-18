const express=require("express")

const router=express.Router()

const Posts=require("../models/postModel")


const authanticate=require("../middleware/authanticate")

router.post("/",authanticate,async(req,res)=>{

    req.body.userId = req.userID;
    try{
        const posts = await Posts.create(req.body)
        return res.status(200).send(posts)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
})

router.get("/", async(req,res)=>{
try {
    const posts = await Posts.find().lean().exec()
        return res.status(200).send(posts)
} catch (err) {
    return res.status(400).send({message : err.message})
}
})

router.patch("/",authanticate,async(req,res)=>{

    req.body.userId = req.userID;
    try{
        const posts = await Posts.findByIdAndUpdate(req.body.userId,{$set:req.body},{new:true})
        return res.status(200).send(posts)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
})

router.delete("/",authanticate,async(req,res)=>{

    req.body.userId = req.userID;
    try{
        const posts = await Posts.findByIdAndDelete(req.body.userId,{new:true})
        return res.status(200).send(posts)
    }
    catch(err){
        return res.status(400).send({message : err.message})
    }
 
})






module.exports=router
