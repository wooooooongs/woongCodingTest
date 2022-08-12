function solution(num) {
  let answer = '';

  for (i = 1; i <= num; i++) {
    answer += ' '.repeat(-i + num);

    // 마지막 열에는 줄바꿈을 하지 않도록 처리
    if ( i == num ) answer += '*'.repeat(i);
    else answer += '*'.repeat(i) + '\n';
  }

  return answer;
}