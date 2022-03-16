const mongoose = require("mongoose");

const gallerySchema = new mongoose.Schema(
  {
    userID: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
    profilePic: [{ type: String, required: true }],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Gallery = mongoose.model("gallery", gallerySchema);

module.exports = Gallery;
