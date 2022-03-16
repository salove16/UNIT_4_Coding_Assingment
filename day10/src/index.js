

const express=require("express")


const connect =require("./configs/db")

const app=express()

app.use(express.json())



const userController=require("./controllers/userController")
app.use("/user",userController)




app.listen(4000,async()=>{
    try {
        await connect()
        console.log("port is listening to 4000")
    } catch (err) {

        console.log(err)
        
    }
})