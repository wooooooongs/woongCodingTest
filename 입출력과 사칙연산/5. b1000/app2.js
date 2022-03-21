const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split(' ');

const num1 = parseInt(input[0]);
const num2 = parseInt(input[1]);

console.log(num1 + num2);
