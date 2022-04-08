let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const T = +input[0];
let arr;
let answer = [];

for(i=1; i<=T; i++){
  arr = input[i].split(' ');
  answer += +arr[0] + +arr[1] + '\n';
}

console.log(answer.trim());