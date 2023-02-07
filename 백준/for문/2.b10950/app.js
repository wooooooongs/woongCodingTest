const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
let input = fs.readFileSync(filePath).toString().split('\n');

const inputValue =[];

for(i=0; i<input.length; i++){
  if(input[i] !== ''){
    inputValue.push(input[1].split(' '));
  }
}

for(j=1; j<inputValue.length; j++){
  console.log(+inputValue[j][0] + +inputValue[j][1]);
}