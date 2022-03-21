let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = '';
for(i = input; i>=1; i--){
  answer += i + '\n';
}

console.log(answer);