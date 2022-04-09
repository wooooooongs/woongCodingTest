let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let multiply = input[0] * input[1] * input[2];
let num = multiply.toString().split('');
let count = 0;
let result = '';

for(i=0; i<10; i++){
  count = 0; // count 초기화
  for(j=0; j<num.length; j++){
    if(+num[j] === +i){ // 0을 찾는데, num[2]가 0이면 count에 1씩 추가.
      count ++
    }
  }
  result += count + '\n'; // num배열을 한 번 훑고 나면 result에 값을 넣는다.
}

console.log(result);