function solution(x, n) {
  var answer = [];
  let value = x;

  for(i=0; i<n; i++){
      answer.push(value)
      value += x
  }
  return answer;
}