let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = '';
for(i=1; i<=input; i++){
  answer += i + '\n';
}

console.log(answer);

// console.log()는 느려서 한 번만 출력해줘야한다!!
// 그렇지 않으면 이 문제는 100,000까지 주어지기 때문에 
// 시간 초과가 뜸.