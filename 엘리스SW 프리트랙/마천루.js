function solution(input) {
  let answer = [];
  let a = '';

  for (i = 0; i < input; i++) {
    a += '*';

    if (i > 4) answer.push('*****');
    else answer.push(a);
  }

  return answer.join('\n');
}