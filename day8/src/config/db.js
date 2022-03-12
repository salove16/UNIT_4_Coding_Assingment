const mongoose=require("mongoose")



const connect =()=>{
    return mongoose.connect(
        "mongodb+srv://salove:tucku9097@cluster0.4nm7b.mongodb.net/paginationAssingment?retryWrites=true&w=majority"
    )
}


module.exports=connect