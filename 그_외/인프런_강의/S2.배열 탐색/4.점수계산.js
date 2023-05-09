function solution(input){
  let answer = 0;
  let count = 0;

  for(i=0; i<input.length; i++){
    if(input[i] == 1)count++
    else count = 0;

    answer += count
  }

  return answer;
}

// reduce활용
function solution2(input){
  let answer = 0;
  if(input[0] === 1) answer += 1

  input.reduce((acc, cur) => {
      if(cur === 1) {
        acc += cur
        answer += acc;
      }
      else acc = 0;
      return acc;
  })

  return answer;
}

const input = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];

console.log(solution(input));
console.log(solution2(input));
// 10 출력