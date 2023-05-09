function solution(a, b, c){
  let answer;
    if(a > b){
      if(b > c){
        answer = c;
      } else {
        answer = b;
      }
    } else if(a > c) {
      answer = c;
    } else {
      answer = a;
    }

  return answer;
}


// 간단한 풀이
function solution2(a, b, c){
  let answer;
  
  if(a > b) answer = b;
  else answer = a;
  if(answer > c) answer = c;

  return answer;
}

console.log(solution(3,1,2));
console.log(solution2(1,2,3));
