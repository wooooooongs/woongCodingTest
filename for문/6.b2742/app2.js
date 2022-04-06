let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';

for(i=input; i>0; i--){
	answer += i + '\n'
}

console.log(answer);