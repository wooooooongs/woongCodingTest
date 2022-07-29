// Array.reduce((max, cur)) 활용
function solution(input){
  let answer = 1;

  input.reduce((max, cur) => {
    if(max < cur) {
      max = cur;
      answer++
    }
    return max
  })
  
  return answer
}

// 그냥 for문
function solution2(input){
  let answer = 1;
  let max = 130;

  for(i=1; i<input.length; i++){
    if(max < input[i]){
      max = input[i];
      answer++;
    }
  }

  return answer;
}

let input = [130,135,148,140,145,150,150,153];

console.log(solution(input));
console.log(solution2(input));