// // import function/ objects
// const call_api = require('./expo'); 

// call_api("Github");

// const Logger = require('./expo');
// const logger = new Logger();

// logger.addListener("Broadcast",arg => console.log("Event occured", arg));

// logger.log("Argument Passed");


const http = require('http');
const server = http.createServer((req,res) =>{
    if (req.url === '/'){
        res.write("Yay, welcome");
        res.end();
    }
    if (req.url === '/api/numbers'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
});

server.listen(3000);

console.log("Listening....");