const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

input = input.map((item) => +item);


function solution(A, B) {
  const input1 = String(B).slice(0,1);
  const input2 = String(B).slice(1,2);
  const input3 = String(B).slice(2,3);
  console.log(A * +input3);
  console.log(A * +input2);
  console.log(A * +input1);
  console.log(A * B);
}

solution(input[0], input[1]);