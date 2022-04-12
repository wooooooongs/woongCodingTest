let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = input[1].split(' ').map((x)=>+x).sort((a,b) => b - a);
let sum = 0;

for(i=0; i<arr.length; i++){
  sum += arr[i]/arr[0]*100;
}

console.log(sum / input[0]);