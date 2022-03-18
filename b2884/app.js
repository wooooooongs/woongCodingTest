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
  const h = input[0];
  const m = input[1];
  console.log(h);

  process.exit();
})