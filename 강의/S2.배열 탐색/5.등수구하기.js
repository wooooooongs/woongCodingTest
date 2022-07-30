function solution(input){
  let answer = []; // 답 넣는 공간
  let sortedArr = [...input].sort((a, b) => b - a);; // 원본 배열 복사

  input.forEach((e, i) => {
    answer.push(sortedArr.indexOf(input[i]) + 1)
  })
  
  return answer;
  // 오답. 소팅 후 indexOf를 활용해서 찾는 건 좋았지만
  // 3명이 같은 점수라면 5명임에도 3등까지 있어야 하지만
  // 이 풀이로는 2, 2, 2, 1, 5 이런 식으로 나온다.
}

function solution2(input){
  
  return input;
}

const input = [92, 89, 92, 100, 76];

console.log(solution(input));
console.log(solution2(input));