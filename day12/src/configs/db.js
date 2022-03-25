const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://salove:salove@cluster0.gpozx.mongodb.net/Oauth_and_Authorisation_assingment?retryWrites=true&w=majority");
};


