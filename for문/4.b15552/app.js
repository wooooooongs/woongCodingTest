const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let value = [];
rl.on('line', function(line) {
  value.push(line.toString().split(' '));

}).on('close', function() {
  console.log(value);
  process.exit();
})