const express=require("express")
const router=express.Router();
const User=require("../models/userModel")
const upload=require("../middleware/upload")
const gallery=require("../middleware/gallery")



router.get("/", async (req, res) => {
    try {
      const users = await User.find().lean().exec();
  
      return res.status(200).send(users);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });


  router.post("/", upload.single("profilePic"), async (req, res) => {
    try {
      //   const user = await User.create(req.body)
      const user = await User.create({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        profilePic: req.file.path,
      });
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });
  router.post("/multi", gallery.array("profilePic",5), async (req, res) => {
    try {

      //   const user = await User.create(req.body)
      const filePaths = req.files.map((file) => {
        return file.path;
      });
  
      const user = await User.create({
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        profilePic:filePaths,
      });
      return res.status(200).send(user);
    } catch (err) {
      return res.status(500).send({ message: err.message });
    }
  });



module.exports=router