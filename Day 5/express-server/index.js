// HTTP Methods ( HTTP VERBS ) 
//  GET = to get data from database
//  POST = used to post/add data in database
//  PUT = used to update data
//  PATCH = it is updating single data
//  DELETE = for deleting the data

// const user = {
//     name:"User Name",
//     email:"user@email.com",
//     password: "1234567"
// }

// Client -> <- Server -> <- Database
// ReactJS-> <- NodeJS -> <- MongoDB
// Browser <==> API <==> DataBase

const express = require("express");
const { readData, postData, deleteOneData, updateOneData } = require("./db-operations");
// const data = require("./data.json"); // importing data

const app = express();// instance of express into app variable

//Application level middleware  - for parsing urlencoded data into  json body
app.use(express.urlencoded({ extended: false }));

// Read
app.get("/", (req, res) => {
    // serve request
    //  console.log("Get Request recived");
    //  res.send("<h1>This is Express JS GET Request</h1>")
    const data = readData();
    res.send(data);
});

// Create
app.post("/", (req, res) => {
    // serve request
    //  console.log("POST Request recived");
    // const name = req.name;
    // const  email = req.email;
    // const password = req.password;
    const { name, email, password } = req.body;
    const userOBJ = {
        id: new Date().getTime(),
        name: name,
        email: email,
        password: password
    }
    postData(userOBJ);
    res.send(`User Data is added Successfully ${name}`);
});

// update
app.put("/:id", (req, res) => {
    // serve request
    //  console.log("PUT Request recived")
    // res.send("This is PUT response");
    const {id} = req.params;// id for user identification
    const {name,email,password} = req.body;
    const updateObject = {name,email,password};
    
   if(updateOneData(id,updateObject)){
     res.send({cod: 200, message: `Data associated with this ID: ${id} updated successfully`});
   }else {
    res.send({cod: 404,message:"Id for updating the user not found"})
   }
});

// single data update
app.patch("/:id", (req, res) => {// for updating name
    // serve request
    //  console.log("PATCH Request recived")
    // res.send("This is PATCH response");
    const {id} = req.params;
    const {name} = req.body;
    
    if(updateOneData(id,{name})){
     res.send({cod:200,message:"Name updated successfully"})
    }else {
    res.send({cod: 404,message:`ID : ${id} NOT FOUND`});
    }
});

// Delete
app.delete("/:id", (req, res) => {
    // serve request
    //  console.log("DELETE Request recived")
    // res.send("This is DELETE response");
    //accesing the id parameter;
   const { id } = req.params;// :id becomes req.params.id
   console.log(id);
    if (deleteOneData(id)) {// data deleted
        res.send({ code: 200, message: `data associated with this id: ${id} Deleted Successfully!!` });
    } else {//data not found
        res.send({ cod: 404, message: "Id Not Found" });
    }
});

const port = 4567;
app.listen(port, () => {
    console.log(`Server is running on port : ${port}`)
})