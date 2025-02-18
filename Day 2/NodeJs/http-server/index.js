//Three types of modules
// 1. Built-in Modules (core modules)
// 2. User defined Modules 
// 3. Third Party Modules (npm)

const http = require("http");

const server = http.createServer((req,res)=>{
  const { headers, method , url } = req;
  if(url=="/"){
    // console.log(req);
   res.write("Hello this is first server response");
   res.end(); 
  }
  if(url=="/name"){
    res.end("My name is Lakshmi");
  }
});

const port = 3030;
server.listen(port,(err)=>{
  console.log(`Server is running... On Port : ${port}`)
});
