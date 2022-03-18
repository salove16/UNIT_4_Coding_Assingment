const connect=require("./configs/db")
const express=require("express")

const app=express()
app.use(express.json())
const userController=require("./controller/userController")
const {register,login}=require("./controller/authController")
const postController=require("./controller/postController")
const registerValidator=require("./middleware/registerValidator")
const loginValidator=require("./middleware/loginValidator")



app.use("/user",userController)
app.use("/register",registerValidator,register)
app.use("/login",loginValidator,login)
app.use("/posts",postController)




app.listen(4000,async()=>{
    await connect()
    console.log("port is listening to 4000")
})

