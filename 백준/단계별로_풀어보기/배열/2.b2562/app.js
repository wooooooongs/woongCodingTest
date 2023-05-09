let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let max = Math.max(...input);
let num;

for(i=0; i<=input.length; i++){
  if(+input[i]===max){
    num = i;
  }
}

console.log(max);
console.log(num + 1);