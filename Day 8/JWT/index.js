const express = require("express");
const { connectDB } = require("./db");
const auth = require("./routes/auth.route");
const app = express();
const cookieParser = require("cookie-parser");
const user = require("./routes/user.route");
const VerifyToken = require("./middleware/verfiyToken");

const PORT = 2222;
// Application level middleware
app.use(express.urlencoded({extended:false}));// body parser
app.use(cookieParser());// for getting and setting cookies

app.use("/auth",auth);//auth route
app.use("/user",VerifyToken,user);//user route

app.listen(PORT,(err)=>{
    connectDB().then((res)=>{
        console.log(res);
        console.log(`Server is running on PORT : ${PORT}`);
    }).catch((err)=>{
     console.log(err);
    })
});