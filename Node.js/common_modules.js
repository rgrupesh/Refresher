const path = require('path');

const pathObj = path.parse(__filename);
console.log(pathObj);


const os = require('os');

const osPlatform = os.platform();
console.log(osPlatform);

const osMemory = os.freemem();
console.log(osMemory);


const fs = require('fs');

fs.readdir('$',(error,files) => {
    if(error) console.log(error);
    else console.log(files);
});


const EventEmitter = require('events');
const emitter = new EventEmitter();

//Listener
emitter.addListener("Broadcast", arg=> console.log("Event occured", arg))
//raising event
emitter.emit("Broadcast", {id: 1, url: 'rupeshgelal.com.np'});

