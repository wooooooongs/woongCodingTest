let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let num = ''
let i = 0;

// 1. 일반적인 while문 풀이
// while(i<input.length){
//   num += +input[i].split(' ')[0] + +input[i].split(' ')[1] + '\n';
//   i++;
// }


// 2. try-catch문을 이용한 예외처리 풀이
while(true){
  try {
    num += +input[i].split(' ')[0] + +input[i].split(' ')[1] + '\n';
    i++;
  } catch {
    break; 
  }
}
console.log(num);