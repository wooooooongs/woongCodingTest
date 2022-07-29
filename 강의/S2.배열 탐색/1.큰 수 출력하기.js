function solution(input){
  let answer = [input[0]];

  for(i = 1; i < input.length; i++){
    if(input[i] < input[i+1]) answer.push(input[i+1])
  }
  return answer
}

let input = [7,3,9,5,6,12];

// Array.reduce()
function solution2(input){
  let answer = [input[0]];

  input.reduce((prev, cur) => {
    if(prev < cur) answer.push(cur);
    return cur;
  })

  return answer
}

console.log(solution(input));
console.log(solution2(input));