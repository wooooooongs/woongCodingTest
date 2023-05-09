const input = require('fs').readFileSync('./input.txt').toString().split('\n');

const code = input[1].split('').map((s) => s.charCodeAt() % 96);
let r = 1;

console.log(
  code.reduce((acc, cur) => {
    acc += cur * r;
    acc %= 1234567891;
    r *= 31;
    r %= 1234567891;

    return acc;
  }, 0)
);
