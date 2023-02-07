let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let num = Number(input);
result = '';

for (i=0; i<num; i++){
  for (j=1; j<num-i; j++){
    result += ' ';
  }

  for (k=0; k<=i; k++){
    result += '*';
  }
  result += '\n'
}

console.log(result);

