require("dotenv").config();
const jwt = require("jsonwebtoken");
const SECRET = process.env.SECRET;
const { User } = require("../models/user");
const bcrypt = require("bcryptjs");

let createToken = (username, id) => {
  return jwt.sign(
    {
      username,
      id,
    },
    SECRET,
    {
      expiresIn: "3 days",
    }
  );
};

module.exports = {
  signin: async (req, res) => {
    console.log('Sign in connection to server successful')
    try {
      let { username, password } = req.body;
      let foundUser = await User.findOne({ where: { username: username } });
      if (foundUser) {
        const isAuthenticated = bcrypt.compareSync(
          password,
          foundUser.hashedPass
        );
        if (isAuthenticated) {
          let token = createToken(
            foundUser.dataValues.username,
            foundUser.dataValues.id
          );
          const exp = Date.now() + 1000 * 60 * 60 * 72;
          const data = {
            user_id: foundUser.dataValues.user_id,
            username: foundUser.dataValues.username,
            token: token,
            exp: exp,
          };
          res.status(200).send(data);
        } else {
          res.status(400).send("Incorrect password. Try again.");
        }
      } else {
        res
          .status(400)
          .send("Username does not match an existing user. Please sign up.");
      }
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  },
  signup: async (req, res) => {
    console.log('Sign up connection to server successful')
    try {
      let { email, username, password } = req.body;
      let foundEmail = await User.findOne({ where: { email: email } });
      let foundUser = await User.findOne({ where: { username: username } });
      if (foundEmail) {
        res.status(400).send("Email is already in use. Please sign in.");
      } else if (foundUser) {
        res
          .status(400)
          .send("Username is already taken. Please pick a different username.");
      } else {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);

        let newUser = await User.create({
          email: email,
          username: username,
          hashedPass: hash,
        });

        let token = createToken(
          newUser.dataValues.username,
          newUser.dataValues.user_id
        );
        const exp = Date.now() + 1000 * 60 * 60 * 72;

        const data = {
          email: newUser.dataValues.email,
          user_id: newUser.dataValues.user_id,
          token: token,
          exp: exp,
        };
        res.status(200).send(data);
      }
    } catch (error) {
      console.error(error);
      res.status(400).send(error);
    }
  },
};
