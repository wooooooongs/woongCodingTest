let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let number = parseInt(input)

for(i=1; i<=number; i++){
  console.log(' '.repeat(number-i) + '*'.repeat(i));
}