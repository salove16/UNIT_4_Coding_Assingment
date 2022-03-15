const express=require("express")
const User=require("../models/userModel")
const router=express.Router()

const transporter=require("../config/mail")
// const adminMail=["kdo0@abc.net.au","yiannello1@amazonaws.com","sdevaan2@scientificamerican.com","jellson3@diigo.com","rlafee4@acquirethisname.com"]
router.get("/",async(req,res)=>{
   try {
       const page=req.query.page
       const pagesize=req.query.pagesize
       const skip=Math.ceil((page-1)*pagesize)
    const user=await User.find().skip(skip).limit(pagesize).lean().exec()
    console.log(user)
 return res.status(200).send(user)
    
   } catch (err) {
       return res.status(500).send(err)
   }
})


router.post("/",async(req,res)=>{
    try {
     const user=await User.create(req.body)
     console.log(user)


  transporter.sendMail({
    from: '"abcsystem" <abc@system.com>', // sender address
    to: `${user.email}`, // list of receivers
    subject:`Welcome to ABC system ${user.firstName} ${user.lastName}`, // Subject line
    text: `Hi ${user.firstName}, Please confirm your email address`, // plain text body
    
  });
  transporter.sendMail({
    from: '"abcsystem" <abc@system.com>', // sender address
    to: "kdo0@abc.net.au,yiannello1@amazonaws.com,sdevaan2@scientificamerican.com,jellson3@diigo.com,rlafee4@acquirethisname.com", // list of receivers
    subject:` ${user.firstName} ${user.lastName} has registered with us`, // Subject line
    text: `Please welcome ${user.firstName} ${user.lastName}`, // plain text body
    // html: "<b>`Hi ${first_name}, Please confirm your email address`</b>", // html body
  });
       return res.status(200).send(user)
    } catch (err) {
        return res.status(500).send(err)
    }
 })
 




module.exports=router




