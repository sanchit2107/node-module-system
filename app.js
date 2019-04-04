function sayHello(name){
    console.log("Hello "+ name);
}

sayHello("Sanchit Singhal")

console.log(module);

var message = ''
console.log(global.message)

const logger = require('./logger');       // load the functiion
console.log(logger);            // returns the function

logger.log('Hi!!! This is message');
console.log(__filename);
console.log(__dirname);


// PATH MODULE
const path = require('path');
const pathObj = path.parse(__filename);
console.log(pathObj);


// OS MODULE
const os = require('os');
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
// console.log('Total Memory :' + totalMemory);    // or we can use Template String without concatenation
console.log(`Total Memory is: ${totalMemory}`);
console.log(`Free Memory is: ${freeMemory}`);


// FILE SYSTEM (fs) MODULE
const fs = require('fs');
fs.readdir('./', function(err, files){
    if (err) console.log('Error:' , err);
    else console.log('Result', files); 
});


// EVENT MODULE
const EventEmitter = require('events');
const emitter = new EventEmitter();
// Regsiter a Listener
emitter.on('messageLogged', (arg) => {      // or function(arg) // arrow function =>
    console.log('Listener Called..!', arg);
});
// Raise an event
emitter.emit('messageLogged' , {id: 1, url: 'https://'});   // EVENT ARGUMENT





