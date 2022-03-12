const express=require("express")
const Evaluation=require("../models/evaluation_model")


const app=express()

app.get("/",async(req,res)=>{
try {
    const user=await Evaluation.find().lean().exec()
    return res.send(user)
} catch (err) {
    console.log(err)
}

})


app.post("/",async(req,res)=>{
    try {
        const user=await Evaluation.create(req.body)
        return res.send(user)
    } catch (err) {
        console.log(err)
    }
    
    })

    app.patch("/:id", async (req, res) => {
        try {
            const user = await Evaluation.findByIdAndUpdate(req.params.id).lean().exec
            return res.send(user)
        } catch (err) {
            console.log(err)
        }
    
    })
    
    app.delete("/:id", async (req, res) => {
        try {
            const user = await Evaluation.findByIdAndDelete(req.params.id).lean().exec()
            return res.send(user)
        } catch (err) {
            console.log(err)
        }
    
    })


module.exports=app