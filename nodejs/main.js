// var fs = require('fs');

// fs.readFile('./hello.txt', encoding = 'utf-8', function(err, data) {
//   if(err){
//     throw err;
//   }

//   console.log(data + ' node.js!');
// })

var EventEmitter = require('events').EventEmitter;
var evt = new EventEmitter();

evt.on('helloNode', function(str){
  console.log('hello! ' + str);
});

setTimeout(function() {
  evt.emit('helloNode', 'Node.js');
}, 3000);