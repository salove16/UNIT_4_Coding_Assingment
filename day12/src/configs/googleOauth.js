const GoogleStrategy = require('passport-google-oauth20').Strategy;
const passport=require("passport")
require("dotenv").config();
const User = require("../models/user.model")
const { v4: uuidv4 } = require('uuid');

passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET_KEY,
    callbackURL: "http://localhost:5000/auth/google/callback"
  },
 async function(accessToken, refreshToken, profile, cb) {
    // console.log(profile)
let user=await User.findOne({email:profile._json.email})

// console.log(user)
if(!user)
{
   user=await User.create({email:profile._json.email,password:uuidv4(),type:["customer"]})
}
// console.log(user);
      return cb(null, user);
    
  }
));


module.exports=passport