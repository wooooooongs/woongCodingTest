const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ')

let a = input[0];
let b = input[1];
let c = input[2];
let d = c - b;
let answer = Math.floor(a / d) + 1;

if(d <= 0) console.log(-1);
else console.log(answer);