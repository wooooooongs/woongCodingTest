let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = 0;

for(i=1; i<=input; i++){
  answer += i;
}

console.log(answer);