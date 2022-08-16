function solution(a, b) {
  let [aM, aL] = [+a.split(',')[0], +a.split(' ')[1]];
  let [bM, bL] = [+b.split(',')[0], +b.split(' ')[1]];
  let [arrA, arrB, answer] = [[], [], []];

  // 구간의 모든 값을 배열에 삽입하기
  for (i = aM - (aL / 2); i <= aM + (aL / 2); i++) {
    arrA.push(i);
  }
  for (i = bM - (bL / 2); i <= bM + (bL / 2); i++) {
    arrB.push(i);
  }
  
  // 겹치는 구간의 값을 answer 배열에 삽입하기
  arrA.forEach((v) => {
    if (arrB[arrB.indexOf(v)] !== undefined) answer.push(arrB[arrB.indexOf(v)])
  })

  // answer의 길이에 1을 빼주어 선분의 길이를 구하기
  if (answer[0] === undefined || answer.length < 2 || answer.length === 0) return 0;
  else return answer.length-1;
}

console.log(solution('2, 4', '4, 8')); // 4
console.log(solution('6, 4', '2, 4')); // 0 
console.log(solution('4, 8', '9, 3')); // -1
// 테스트 케이스 4만 통과. 이유를 정말 모르겠다.
// 8월 16일, 케이스 1~3의 입력값이 무엇인지 물어봤다.