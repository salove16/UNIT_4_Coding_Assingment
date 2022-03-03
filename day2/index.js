const express=require("express")

const book=require("./book.json")

// console.log(express)
const app=express()

app.get("",function(req,res){
    // console.log("hello")
    

})

app.get("/books",function(req,res){

// return res.send({book})
res.send({book})

})


app.listen(4000,()=>{
    console.log("hello port 4000")

})
