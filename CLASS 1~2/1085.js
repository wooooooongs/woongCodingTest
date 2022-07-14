// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
// const [x,y,w,h] = [input[0],input[1],input[2],input[3]];

// const arr = [+x,+y,w-x,h-y];

// console.log(Math.min(...arr));


// 2번째 풀이
const input = '161 181 762 375'.split(' ').map((v) => +v);

let answer = [];

answer.push(input[2] - input[0]);
answer.push(input[3] - input[1]);
answer.push(input[0]);
answer.push(input[1]);

console.log(Math.min(...answer));