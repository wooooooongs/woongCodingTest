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
// push 없이: 비효율적이다.
function solution2(input) {
  let answer = "";
  let a = "";

  for (i = 0; i < input; i++) {
    a += "*";

    if (i > 4) answer += `*****\n`;
    else answer += `${a}\n`;
  }

  return answer.trim();
}