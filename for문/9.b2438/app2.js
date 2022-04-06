let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';

for(i=0; i<=input; i++){
	answer += '*';
	for(j=0; j<=input; j++){
		answer += '\n'
	}
}

console.log(answer);