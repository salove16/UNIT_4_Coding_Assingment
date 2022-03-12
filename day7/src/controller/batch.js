const express=require("express")
const Batch=require("../models/batch_model")


const app=express()

app.get("/",async(req,res)=>{
try {
    const user=await Batch.find().lean().exec()
    return res.send(user)
} catch (err) {
    console.log(err)
}

})


app.post("/",async(req,res)=>{
    try {
        const user=await Batch.create(req.body)
        return res.send(user)
    } catch (err) {
        console.log(err)
    }
    
    })

    app.patch("/:id", async (req, res) => {
        try {
            const user = await Batch.findByIdAndUpdate(req.params.id).lean().exec
            return res.send(user)
        } catch (err) {
            console.log(err)
        }
    
    })
    
    app.delete("/:id", async (req, res) => {
        try {
            const user = await Batch.findByIdAndDelete(req.params.id).lean().exec()
            return res.send(user)
        } catch (err) {
            console.log(err)
        }
    
    })


module.exports=app