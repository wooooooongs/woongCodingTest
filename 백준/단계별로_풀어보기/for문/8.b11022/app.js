let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(i=1; i<=input[0]; i++){
  let num = input[i].split(' ');
  console.log(`Case #${i}: ${num[0]} + ${num[1]} = ` +
  `${Number(num[0]) + Number(num[1])}`);
}


// 궁금한 점. for문을 통해 let num를 계속 선언하여도 메모리에 문제가 없는가?