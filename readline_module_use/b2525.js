const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function(value) {
  input = value.split('/n').map((n) => parseInt(n))
})
.on('close', function() {
  let h = input[0];
  let m = input[1];

  console.log(h, m);
  process.exit();
})