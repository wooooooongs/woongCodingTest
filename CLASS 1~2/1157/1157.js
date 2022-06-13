const input = require('fs').readFileSync('/dev/stdin').toString().trim().toLowerCase().split('');

const txtArr = Array.from(new Set(input)) // 중복 제거

let answer = '';
let maxCount = 0;

for(i=0; i<txtArr.length; i++){
  let count = input.filter((n) => n == txtArr[i]).length;

  if(maxCount < count){
    maxCount = count;
    answer = txtArr[i]
  } else if (maxCount == count) {
    answer = '?'
  }
}

console.log(answer.toUpperCase());