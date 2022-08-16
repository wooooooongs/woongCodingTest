function solution(str) {
  let arr = str.toLowerCase().split(' ').join('').split('');
  let answer = {};

  arr.forEach((v) => {
    if (isNaN(answer[v])) answer[v] = 1;
    else answer[v] += 1;
  })

  return answer;
}

// 짧은 코드지만, 객체를 다루는 법을 알게 됐음.
// answer.v 는 안되고 answer[v]는 되는 이유가 뭘까?
// ㄴ> answer.v일 때, v의 값은 문자열로 인식을 함.