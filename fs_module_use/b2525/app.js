const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function(value) {
  input = value.split(' ').map((n) => parseInt(n))
})
.on('close', function() {
  let h = input[0];
  let m = input[1] - 45;
  
  if(m < 0){
    h -= 1;
    if(h < 0){
      h += 24;
    }
    m += 60;
  }

  console.log(h, m);
  process.exit();
})