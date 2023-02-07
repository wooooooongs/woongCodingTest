const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

console.log(input.map((n) => Math.pow(+n, 2)).reduce((acc,cur) => acc + cur) % 10); 