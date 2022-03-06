const express = require("express");
// const { endianness } = require("os");
// const name = require("./books.json")
const app = express();
// console.log(app)

// app.use(allBooks);

app.get("/books", allBooks, (req, res) => {
    return res.send({ route: "/books" })
})

function allBooks(req, res, next) {

    console.log("Fetching all books")
    next()

}

app.get("/books/:name", singleBook, (req, res) => {

    return res.send({"bookName": req.name})
    
})

function singleBook(req,res,next)
{
    req.name=req.params.name
    if(req.name=="GameOfThrones"||req.name=="HarryPotter"){
        next()
    }else{
        return res.send("not matching")
    }
}


app.listen(3000, () => {
    console.log("listening port 3000")
})