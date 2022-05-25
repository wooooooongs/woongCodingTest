const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
const [x,y,w,h] = [input[0],input[1],input[2],input[3]];

const arr = [+x,+y,w-x,h-y];

console.log(Math.min(...arr));