const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');
input = input.map((item) => +item);


// 방법 1. 문자열 변환 후 slice()를 이용하여 뽑아냄
// function solution(A, B) {
//   const input1 = String(B).slice(0,1);
//   const input2 = String(B).slice(1,2);
//   const input3 = String(B).slice(2,3);
//   console.log(A * +input3);
//   console.log(A * +input2);
//   console.log(A * +input1);
//   console.log(A * B);
// }

// solution(input[0], input[1]);


// 방법 2. 문자열 변환 후 배열을 통해 뽑아냄
function solution(A,B) {
  const input1 = String(B);
  console.log(A * +input1[2]);
  console.log(A * +input1[1]);
  console.log(A * +input1[0]);
  console.log(A * B);
}

solution(input[0], input[1]);