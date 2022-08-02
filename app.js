const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')
let n = input[0];

input.shift();
input.sort((a, b) => a - b);

for(i=0; i<n; i++){
  console.log(input[i]);
}