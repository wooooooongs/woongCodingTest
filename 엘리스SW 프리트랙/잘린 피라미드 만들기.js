function solution(a, b) {
  // 오류 처리반들
  if (a > b) return '오류';
  if (a === b) return '오류';
  if (a >= 15) return '오류';
  // 최대 폭을 15로 제한한다.
  if (b > 15) b = 15

  let answer = ['*'.repeat(a - 1)];
  let temp = answer[0];

  while (answer.length <= b - a + 1){
    temp += '*'
    if (answer.length <= b - a) answer.push(temp + '\n')
    else answer.push(temp);
  }

  // answer[0]에 필요없는 항목 제거..
  answer.shift();

  return answer.join('');
}