const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

solution(+input[0]);

function solution(n) {  
  if (n % 4 === 0 && n % 100 !== 0 || n % 400 === 0) {
      console.log('1');
  } else {
    console.log('0');
  }
}