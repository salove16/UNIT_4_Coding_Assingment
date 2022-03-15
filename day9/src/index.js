const express=require("express")

const app=express()
app.use(express.json())
const connect=require("./config/db")

const userController=require("./controller/userController")

app.use("/user",userController)


app.listen(4000,async()=>{
    try {
       await connect ()
    } catch (err) {

        console.log(err)
        
    }
    console.log("port is listening 4000")
})