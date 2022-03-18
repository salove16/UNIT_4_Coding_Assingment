const mongoose=require("mongoose")


const connect=()=>{
    return mongoose.connect(
        "mongodb+srv://salove:salove@cluster0.gpozx.mongodb.net/Authentication_assingment?retryWrites=true&w=majority"
    )
}


module.exports=connect