const fs = require("fs");// file system

//Fs module have 
// sync methods
// Promise methods
// callbacks methods
// const textData =  fs.readFileSync("random.txt");// data in buffer
// const bufferToString = textData.toString();// convert buff to str

// console.log(bufferToString);

// Read data
const txtData = fs.readFileSync("random.txt",{encoding:"utf-8"});// usging encoding for conveting buffer to text
console.log(txtData);

//write data
fs.writeFileSync("random.txt","\nThis is new data");

//append data - using flag = a
fs.writeFileSync("random.txt","\nThis is new data",{flag:"a"});
// fs.appendFileSync = do the same work as we did using flag = a with writeFileSync

const readFile = fs.readFileSync("random.txt",{encoding:'utf-8'});
console.log(readFile);

fs.writeFileSync("newFile.txt","Some random data");

//renaming file
fs.rename("newFile.txt","newestFile.txt",()=>{
    console.log("file renamed successfully")
});