/*wrapper function args:
exports,require,module,__filename,__dirname
*/
function my_call(endpoint){
    console.log(`${endpoint} called!`)
}
// export function/ or object
module.exports = my_call; 

const EventEmitter = require('events');

class Logger extends EventEmitter{
    log(message){
        console.log(message)
    
    this.emit("Broadcast",{id:1, area:"Nepal"});
    }
}

module.exports = Logger; //exporting class