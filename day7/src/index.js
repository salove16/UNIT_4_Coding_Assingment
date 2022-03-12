

// Users :- has all the basic details like firstName, lastName, gender, dateOfBirth, type(type will be student, admin or instructor) , createdAt, updatedAt

const express=require("express")

const mongoose=require("mongoose")

// const User=require("./models/user_model")//done
const userControllers=require("./controller/user")

// const Batch=require("./models/batch_model")//done
const batchControllers=require("./controller/batch")

// const Student=require("./models/student_model")// done

const studentControllers=require("./controller/student")

// const Evaluation=require("./models/evaluation_model")//done
const evaluationControllers=require("./controller/evaluation")

// const Submission=require("./models/submission_model")//done
const submissionControllers=require("./controller/submission")
const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://salove:tucku9097@cluster0.4nm7b.mongodb.net/mvcAssignment?retryWrites=true&w=majority"
        )
}

const app=express()
app.use(express.json())


// const connect=mongoose.connect({
    
// })

app.use("/user",userControllers)
app.use("/batch",batchControllers)
app.use("/student",studentControllers)
app.use("/evaluation",evaluationControllers)
app.use("/submission",submissionControllers)



app.listen(4000,async()=>{
    
try {
    await connect()
} catch (err) {
    console.log(err)
    
}
    console.log("port is listneing to 4000")
})