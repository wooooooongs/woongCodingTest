let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(+input[0] * +(input[1].slice(-1)));
console.log(+input[0] * +(input[1].slice(-2,-1)));
console.log(+input[0] * +(input[1].slice(-3,-2)));
console.log(+input[0] * +input[1]);