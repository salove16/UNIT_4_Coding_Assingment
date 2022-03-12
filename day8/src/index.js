const express=require("express")

const app=express()


app.use(express.json())

const userController=require("./controller/user")
app.use("/user",userController)
const adminController=require("./controller/admin")

app.use("/admin",adminController)


module.exports=app