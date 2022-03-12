const mongoose=require("mongoose")
const { modelName } = require("./userModel")


const adminSchema=new mongoose.Schema({

userId:{type:mongoose.Schema.Types.ObjectId,
ref:"user",
required:true}

},
{
    versionKey:false,
    timestamps:true
})


const Admin= mongoose.model("admin",adminSchema)

module.exports=Admin