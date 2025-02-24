// Middleware - between request and response - it has access of req, res and next
//Types of Middleware 
// 1. Application level middleware - applicable on all the routes
// 2. Router level middleware - applicable on one route
// 3. Builtin - middleware - already present in local modules
// 4. Third Party - middleware - installed via npm commands
// 5. Error Handling middleware - to handle error (prevent crashing of application)

// Client => request => middleware => response => Client
// Client => GET /user/:id  => bodyparser => userobj => Client 
const express = require("express");
const logger = require("./middleware/logger");
const app = express();

app.use(express.urlencoded({extended:false}))// Application level middleware

// Middleware on Application level
// app.use(logger);// for all methods and all routes

// middleware on Router level
app.use("/user",logger);// for all methods and one route

// route level - for one method and one route
app.get("/",(req,res)=>{
    res.send("this get request");
});

const port = 1234;
app.listen(port,()=>{
    console.log(`Server is running on PORT : ${port}`)
});