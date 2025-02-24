const express = require("express");
const { connected, client } = require("./db");
const { ObjectId } = require("mongodb");
const  bcrypt = require("bcrypt");
const app = express();
const dbName = "Todo";
const db = client.db(dbName);
const users = db.collection("users");

app.use(express.urlencoded({ extended: false }));

app.post("/user", async (req, res) => {
  const { name, email, pass } = req.body;
  const salt = 1;//
  const hashedPass = await bcrypt.hash(pass,salt);
  const insertUser = await users.insertOne({ name, email, pass:hashedPass});
  console.log(insertUser)
  res.status(200).send({ code: 200, message: "User Created Successfully" });
});

// fetch all users
app.get("/users", async (req, res) => {
  const allusers = await users.find({}).toArray();
  res.status(200).send({
    code: 200,
    userlist: allusers
  })
});

//fetch one user
app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const oneUser = await users.findOne({ _id: new ObjectId(id) });
  res.status(200).send({ code: 200, userDetails: oneUser })
});

app.get("/user",async (req,res)=>{
   const {email,pass} = req.body;
   const User = await users.findOne({email});
   const matched = await bcrypt.compare(pass, User.pass)// comparing pass with hash
   if(matched){
     res.status(200).send({code:200,userDetails: User});
   }else {
    res.status(401).send({code: 401,message:"UnAuthorised - wrong password"});
   }
});

app.patch("/user/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  await users.updateOne({ _id: new ObjectId(id) }, { $set: { name: name } });
  res.status(200).send({ code: 200, message: `User's name with id: ${id} updated!` });
})

app.delete("/user/:id", async (req, res) => {
  const { id } = req.params;
  await users.deleteOne({ _id: new ObjectId(id) });
  res.status(200).send({ code: 200, message: "user is deleted successfully" })
});

const port = 5555;
app.listen(port, () => {
  connected()
    .then((res) => {
      console.log(res);
      console.log(`Server is Running on PORT : ${port}`);
    }).catch((err) => {
      console.log(err);
    })
});