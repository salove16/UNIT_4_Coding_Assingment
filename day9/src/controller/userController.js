const express=require("express")
const { body, validationResult } = require("express-validator");

const User=require("../model/usermodel")

const router=express.Router()
// console.log(router)

// router.get("/")



router.post("/",
body("first_name")
.not()
.isEmpty()
.withMessage("First Name cannot be empty"),
body("last_name")
.trim()
.not()
.isEmpty()
.withMessage("Last Name cannot be empty"),
body("email")
.isEmail()
.custom(async (value) => {
    const user = await User.findOne({ email: value });

    if (user) {
      throw new Error("Email is already taken");
    }
    return true;
  }),
  body("pincode")
  .not()
  .isEmpty()
  .isLength({min:6,max:6})
  .withMessage("please enter a valid pincode"),
  body("age")
  .not()
  .isEmpty()
  .withMessage("Age cannot be empty")
  .isNumeric()
  .withMessage("Age must be a number between 1 and 100")
  .custom((value) => {
    if (value < 1 || value > 100) {
      
    }
    return true;
  }),
  body("gender")
  .not()
  .isEmpty()
  .withMessage("gender is empty")
  .custom((value)=>{
      if(value=="male"||value=="female"||value=="other")
      {
          return true
      }else
      {
        throw new Error("Please fill the gender section as eithe Male or Female or Other");
      }
  }),

async(req,res)=>{
try {
    // console.log(body("first_name"));
    const errors = validationResult(req);
    console.log({ errors });
    if (!errors.isEmpty()) {
      return res.status(400).send({ errors: errors.array() });
    }

    const user = await User.create(req.body);

    return res.status(201).send(user);
} catch (err) {

    return res.status(500).send({ message: err.message });
    
}
})







module.exports=router


