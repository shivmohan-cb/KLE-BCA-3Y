const express = require("express");
const { client } = require("../db");
const auth = express.Router(); //for creating modular routes
const JWT = require("jsonwebtoken");

const dbName = "Authentication";
const db = client.db(dbName);
const Users = db.collection("users");

auth.post("/signup", async (req, res) => {
  // create new user
  const { name, email, password } = req.body;
  //check unique user
  const find = await Users.findOne({ email: email.toLowerCase() });
  console.log(find);
  if (find) {
    res
      .status(401)
      .send({ message: "email already in use, Please use different email" });
  } else {
    await Users.insertOne({ name, email: email.toLowerCase(), password });
    res.status(200).send({ message: "User signed up successfully" });
  }
});

auth.post("/login", async (req, res) => {
  // create token and store it in cookie storage of client
  const { email, password } = req.body;
  const find = await Users.findOne({ email: email.toLowerCase() });
  console.log(find);
  if (find) {
    // if user is found
    if (find.password == password) {
      // create token
      const token = JWT.sign(
        {
          id: find._id,
          name: find.name,
          email: find.email,
        },
        "secret-is-secret",
        { expiresIn: "1h" }
      );
      // store in browser cookie using cookie-session
      res.cookie("token", token, { maxAge: 60000 });// 1 min cookie age
      res.status(200).send({message:"Logged in Successfully"});
    } else {
      // if password doesnot matches
      res.status(401).send({ message: "Email or Password is incorrect" });
    }
  } else {
    res.status(404).send({ message: "Email or Password is incorrect" });
  }
});

module.exports = auth;
