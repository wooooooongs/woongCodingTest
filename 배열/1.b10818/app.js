let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arr = input[1].split(' ').map(Number);

console.log(Math.min(...arr) + ' ' + Math.max(...arr));