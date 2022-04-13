let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const num = input[0]
let arr = input[1].split('');
let sum = 0;

for(i=0; i<num; i++){
  sum += +arr[i];
}

console.log(sum);