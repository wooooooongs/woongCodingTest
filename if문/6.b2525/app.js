const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let hour = parseInt(input[0].split(' ')[0]);
let min = parseInt(input[0]. split(' ')[1]);
const time = parseInt(input[1])

min += time;

while(min >= 60){
  min -= 60;
  hour += 1;
  if(min === 0){
    break;
  }
}
if(hour >= 24){
  hour -= 24;
}

console.log(hour, min);