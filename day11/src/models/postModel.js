const mongoose=require("mongoose")


const postSchema=mongoose.Schema(
    {
title:{type:String,required:true},
body:{type:String,required:true},
userID:{type:mongoose.Schema.Types.ObjectId,ref:"user",required:true}
    },
    {
versionKey:false,
timeStamps:true
    }
    )

    const Post=mongoose.model("post",postSchema)

    module.exports=Post