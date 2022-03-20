const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split(' ').map(Number).sort((x,y) => y-x);

const [a, b, c] = [input[0], input[1], input[2]];

let output;
console.log(a,b,c);

if(a === b && b === c){
  console.log(output = 10000 + a * 1000);
} else {
  if(a === b || b === c){
    console.log(output = 1000 + b * 100);
  } else {
    console.log(output = a * 100);
  }
}