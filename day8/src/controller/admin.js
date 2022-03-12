const express=require("express")
const Admin=require("../models/adminModels")
const router=express.Router()

const transporter=require("../config/mail")

router.get("/",async(req,res)=>{
   try {
    const admin=await Admin.find().lean().exec()
    // console.log(user)
 return res.status(200).send(admin)
    
   } catch (err) {
       return res.status(500).send(err)
   }
})


router.post("/",async(req,res)=>{
    try {
     const admin=await Admin.create(req.body)
    //  console.log(admin)


  
       return res.status(201).send(admin)
    } catch (err) {
        return res.status(500).send(err)
    }
 })
 




module.exports=router




