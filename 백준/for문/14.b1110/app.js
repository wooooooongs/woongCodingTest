let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


const first = input[0].substring(0,1);
const second = input[0].substring(1,2);
const third = +first + +second

console.log(+second + +third);