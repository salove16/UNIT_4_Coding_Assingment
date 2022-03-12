const express = require("express")
const Student = require("../models/student_model")


const app = express()

app.get("/", async (req, res) => {
    try {
        const user = await Student.find().lean().exec()
        return res.send(user)
    } catch (err) {
        console.log(err)
    }

})


app.post("/", async (req, res) => {
    try {
        const user = await Student.create(req.body)
        return res.send(user)
    } catch (err) {
        console.log(err)
    }

})

app.patch("/:id", async (req, res) => {
    try {
        const user = await Student.findByIdAndUpdate(req.params.id).lean().exec
        return res.send(user)
    } catch (err) {
        console.log(err)
    }

})

app.delete("/:id", async (req, res) => {
    try {
        const user = await Student.findByIdAndDelete(req.params.id).lean().exec()
        return res.send(user)
    } catch (err) {
        console.log(err)
    }

})


module.exports = app