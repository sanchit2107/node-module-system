const EventEmitter = require('events');
var url = 'https://sanchit2107.github.io/portfolio';

class Logger extends EventEmitter{
    log(message){
        // Send an HTTP request
        console.log(message);
        // Raise an event
        this.emit('messageLogged' , {id: 1, url: 'https://'});   // EVENT ARGUMENT
    }
}

module.exports = Logger;