let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n')

let num = input[0];
let answer = '';

for(i=1; i<=num; i++){
  let inputNum = input[i].split(' ');
  answer += parseInt(inputNum[0]) + parseInt(inputNum[1]) + '\n';
}
console.log(answer);