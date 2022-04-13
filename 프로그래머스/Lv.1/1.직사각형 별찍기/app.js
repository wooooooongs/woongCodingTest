const a = 5, b =3;
let answer = '';

for(i=0; i<b; i++){
  for(j=0; j<a; j++){
    answer += '*';
  }
  answer += '\n'
}

console.log(answer.trim());