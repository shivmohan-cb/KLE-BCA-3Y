const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
// const dbName = 'Todo';
const client = new MongoClient(url);

// async function connected() {
//   // Use connect method to connect to the server
//   await client.connect();
//   console.log('Connected successfully to Mongodb server');
//   const db = client.db(dbName);
//   const collection = db.collection('users');
//    await collection.insertOne({name:"new user"});
//   // the following code examples can be pasted here...

//   return db;
// }

// connected();
async function connected() {
  try {
    await client.connect();
    return "Connected Successfully to the MongoDB server"
  } catch (err) {
    return err.message;
  }
}

module.exports = {connected,client};