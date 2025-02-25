const { ObjectId } = require("mongodb");
const { client } = require("../db");

const user = require("express").Router();// for router module

const dbName = "Authentication";
const db = client.db(dbName);
const Users = db.collection("users");

//get user data
user.get("/", async(req,res)=>{
const find = await Users.findOne({
    _id: new ObjectId(req.user.id)
});

res.status(200).send({user: {...find}});
});

user.patch("/name", async()=>{
 const { name } = req.body;   
 await Users.updateOne({_id : req.user.id},{
    $set: {name: name}
 });
 res.status(200).send({message:"name updated sucessfully"});
});


user.delete("/user",async ()=>{
// delete 
});


module.exports = user;
