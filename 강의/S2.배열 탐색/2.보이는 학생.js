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

let input = [130,135,148,140,145,150,150,153];
console.log(solution(input));