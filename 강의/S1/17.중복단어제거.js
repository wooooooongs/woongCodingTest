// Array.includes()
function solution(input){
  let answer = [];
  let arr = input.split('\n');

  for(i of arr){
    answer.includes(i) === true ? null : answer.push(i);
  }
  // 배열.includes()를 썼는데, false일 때만 리턴한다. 왜일까?

  console.log(answer);
  return answer;
}

// Array.filter() 참일 때 반환한 값들을 모아 새로운 배열을 만든다.
function solution2(input){
  const arr = input.split('\n');
  const answer = arr.filter((v, i) => {
    if(arr.indexOf(v) === i) return true;
  })

  return answer;
}

// indexOf() == -1 의 활용 
function solution3(input){
  let answer = '';
  const arr = input.split('\n');

  for(i of arr){
    if(answer.indexOf(i) == -1) answer += i + ' ';
  }

  return answer
}

let input = `good
time
good
time
student`;

console.log(solution(input));
console.log(solution2(input));
console.log(solution3(input));