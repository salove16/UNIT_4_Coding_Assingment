const express = require("express")
const User = require("../models/user_model")


const app = express()

app.get("/", async (req, res) => {
    try {
        const user = await User.find().lean().exec()
        return res.send(user)
    } catch (err) {
        console.log(err)
    }

})


app.post("/", async (req, res) => {
    try {
        const user = await User.create(req.body)
        return res.send(user)
    } catch (err) {
        console.log(err)
    }

})

app.patch("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id).lean().exec
        return res.send(user)
    } catch (err) {
        console.log(err)
    }

})

app.delete("/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id).lean().exec()
        return res.send(user)
    } catch (err) {
        console.log(err)
    }

})


module.exports = app