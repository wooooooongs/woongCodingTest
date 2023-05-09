const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function(value) {
  input.push(parseInt(value));
})
.on('close', function() {
  const X = input[0];
  const Y = input[1];
  if(X > 0){
    Y > 0 ? console.log('1') : console.log('4');;
  }
  if(X < 0){
    Y > 0 ? console.log('2') : console.log('3');;
  }
  process.exit();
})