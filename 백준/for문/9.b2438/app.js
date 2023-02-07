let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let star = '';

for(i=1; i<=input; i++){
  console.log(star += `*`);
}