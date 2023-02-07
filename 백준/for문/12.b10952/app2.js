let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let arr = [];
let answer = '';

for(i=0; i<input.length; i++){
  arr = input[i].split(' ');
  if(+arr[0] !== 0){
    answer += +arr[0] + +arr[1] + '\n';
  } else {
    break;
  }
}

console.log(answer);