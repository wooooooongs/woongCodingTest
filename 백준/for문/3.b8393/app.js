const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString();
let result = 0;

for(i=1; i<=input; i++){
  result += i
}
console.log(result);