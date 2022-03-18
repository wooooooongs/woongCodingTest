const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

// 방법 1
function solution(A) {
  if(90 <= A){
    console.log('A');
  } else if(80 <= A){
    console.log('B');
  } else if(70 <= A){
    console.log('C');
  } else if(60 <= A){
    console.log('D');
  } else {
    console.log('F');
  }
};

// 방법 2
// (90 <= A && <= 100) 이런 식도 가능하다!