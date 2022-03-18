const connect=require("./configs/db")
const express=require("express")
const app=express()
app.use(express.json())
const userController=require("./controller/userController")

app.use("/user",userController)
const {register,login}=require("./controller/authController")

app.post("/register",register)
app.post("/login",login)





app.listen(4000,async()=>{
    await connect()
    console.log("port is listening to 4000")
})

