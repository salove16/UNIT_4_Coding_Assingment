const { body, validationResult } = require("express-validator");
const express=require("express")
const router=express.Router()



router.post("/",
body("email")
.isEmail()
.withMessage("Enter a proper Email"),
body("password")
.not()
.isEmpty()
.withMessage("Password is left blank")
.isLength({min:8,max:16})
.withMessage("Enter a valid Password"),
async(req,res,next)=>{
    try {
        // console.log(body("first_name"));
        const errors = validationResult(req);
        console.log({ errors });
        if (!errors.isEmpty()) {
          return res.status(400).send({ errors: errors.array() });
        }
    
    return next()
    } catch (err) {
    
        return res.status(500).send({ message: err.message });
        
    }
    })


    module.exports=router


