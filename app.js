const num = require('fs').readFileSync('/dev/stdin')
let count = 1;
let range = 1;

while(count < num){
  count += 6 * range;
  range ++
}

console.log(range);