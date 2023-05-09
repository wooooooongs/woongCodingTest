let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let answer = '';

for(i=1; i<=input; i++){
	answer += i + '\n';
}

console.log(answer);