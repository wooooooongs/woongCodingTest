let input = require('fs').readFileSync('/dev/stdin').toString().split('\n');

for(i=1; i<=input[0]; i++){
  let num = input[i].split(' ');
  console.log(`Case #${i}: ` + `${Number(num[0]) + Number(num[1])}`);
}
