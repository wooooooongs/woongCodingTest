let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const num = +input[0]
let arr = []

for(i=1; i<=num; i++){
  arr = input[i].split('');
  let sum = 0;
  let answer = 0;

  for(j=0; j<=arr.length; j++){
    if(arr[j] === 'O'){
      sum += 1
    } else {
      sum = 0
    }
    answer += sum
  }

  console.log(answer);
}