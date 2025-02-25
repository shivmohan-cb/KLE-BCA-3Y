const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function connectDB(){
    try{
     await client.connect();
     return "Connected to the Mongodb Server"
    }catch(err){
      return err.message
    }
}
module.exports = {
    connectDB,
    client
}