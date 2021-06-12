/*wrapper function args:
exports,require,module,__filename,__dirname
*/
function my_call(endpoint){
    console.log(`${endpoint} called!`)
}

module.exports = my_call; // export function/ or object