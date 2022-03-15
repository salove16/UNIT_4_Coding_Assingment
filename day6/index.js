const express = require("express")
const mongoose = require("mongoose")

const app = express()

app.use(express.json())
const connect = () => {
    return mongoose.connect(
        "mongodb+srv://salove:tucku9097@cluster0.pagqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
}



const sectionSchema = new mongoose.Schema({
    s_name: { type: String, required: true },
    book_id:{type: mongoose.Schema.Types.ObjectId,ref:"book",unique:true,required:true}

})


const Section = mongoose.model("section", sectionSchema)





const authorSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    book_id:{type: mongoose.Schema.Types.ObjectId,ref:"book",required:true}

},
    {
        versionKey: false,
        timestamps: true
    })

const Author = mongoose.model("author", authorSchema)

const bookSchema = new mongoose.Schema({
    name: { type: String, required: true },
    body: { type: String, required: true },

    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "author",
        required: true
    },

    section_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "section",
        required: true
    }
},
    {
        versionKey: false,
        timestamps: true
    }
)


const Book = mongoose.model("book", bookSchema)


const userSchema = new mongoose.Schema({

},
    {
        versionKey: false,
        timestamps: true
    })

const User = mongoose.model("user", userSchema)

const checkoutSchema = new mongoose.Schema({
    checkedOutTime: {type:Date,default:"null",required:true},
    checkedInTime: {type:Date,default:"null",required:true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true, unique: true },
    book_id: { type: mongoose.Schema.Types.ObjectId, ref: "book", required: true, unique: true }
},
    {
        versionKey: false,
        timestamps: true

    })

const Checkout = mongoose.model("checkout", checkoutSchema)



app.get("/author", async (req, res) => {
    try {
        const authors = await Author.find().lean().exec();
        return res.status(200).send(authors);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})


app.post("/author", async (req, res) => {

    try {
        const author = await Author.create(req.body)

        return res.status(201).send(author);

    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

app.get("/author/:id", async (req, res) => {

    try {
        const author = await Author.findById({author_id:req.params.id}).lean().exec()

        return res.status(200).send(author);

    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

app.get("/book", async (req, res) => {
    try {
        const books = await Book.find().lean().exec();
        return res.status(200).send(books);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})


app.post("/book", async (req, res) => {

    try {
        const book = await Book.create(req.body)

        return res.status(201).send(book);

    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

app.get("/book/:id/author", async (req, res) => {

    try {
        const book = await Book.find({author_id:req.params.id}).lean().exec()
        

        return res.status(200).send(book);

    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

app.get("/book/:id/section",async (req, res) => {

    try {
        const book = await Book.find({section_id:req.params.id}).lean().exec()
        

        return res.status(200).send(book);

    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

// function logger(a){
//     return function(){
//         if (a=="author"){

//         }
//     }
// }

app.get("/section", async (req, res) => {
    try {
        const sections = await Section.find().lean().exec();
        return res.status(200).send(sections);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})


app.post("/section", async (req, res) => {

    try {
        const section = await Section.create(req.body)

        return res.status(201).send(section);

    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})




app.get("/checkout", async (req, res) => {
    try {
        const checkout = await Checkout.find().lean().exec();
        return res.status(200).send(checkout);
    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})


app.post("/checkout", async (req, res) => {

    try {
        const checkout = await Checkout.create(req.body)

        return res.status(201).send(checkout);

    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

app.patch("/checkout/:id/checkout", async (req, res) => {

    try {
        const checkout = await Checkout.findByIdAndUpdate(req.params.id,req.body,{new:true}).lean().exec()

        return res.status(201).send(checkout);

    } catch (err) {
        return res.status(500).send({ message: err.message });
    }
})

app.listen(4000, async () => {
    try {
        await connect();
    } catch (err) {
        console.log(err);
    }
    console.log("port is listening 4000")
})