const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
require('dotenv').config()


const newToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECREAT_KEY);
};

const register = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (user) {
      return res.status(400).send("email alredy exits");
    }

    user = await User.create(req.body);
    const token = newToken(user);

    return res.status(200).send({user, token});
  } catch (err) {
    console.log(err);
  }
};

const login = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).send("wrong email or password");
    }

    let match=user.checkPassword(req.body.password)
    if(!match)
    {
        return res.statue(400).send("wrong email or password");
    }


    const token = newToken(user);

    return res.status(200).send({user, token});
  } catch (err) {
    console.log(err);
  }
};

module.exports = { register, login };
