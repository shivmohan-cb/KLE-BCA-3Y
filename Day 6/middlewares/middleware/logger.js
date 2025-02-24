const fs = require("fs");
// logger - for maintaining all the logs for request server recieved
const logger = (req, res, next) => {// next very important
    const { method, url } = req;
    const recievedAt = new Date().toLocaleString();
    const log = `${method} ${url} - ${recievedAt}`+"\n";
    fs.writeFileSync("logs.txt", log, {flag:"a"});

    next()// it will procced to next route handler
}


module.exports = logger;
