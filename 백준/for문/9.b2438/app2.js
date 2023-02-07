let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = '';

for(i=1; i<=input; i++){
	for(j=1; j<=i; j++){
		answer += '*';
	}	
	answer += '\n'
}

console.log(answer);	