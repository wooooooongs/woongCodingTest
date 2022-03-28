let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = ''
let i = 0;


// 1. for문
// for(i=0; i<input.length-1; i++){
//   num += +input[i].split(' ')[0] + +input[i].split(' ')[1] + '\n';
// }

// 2. while문
while(input[i] !== '0 0'){
  num += +input[i].split(' ')[0] + +input[i].split(' ')[1] + '\n';
  i++;
}
console.log(num);