// 1. 정렬 후 indexOf로 찾기
function solution(input){
  let answer = []; // 답 넣는 공간
  let sortedArr = [...input].sort((a, b) => b - a);; // 원본 배열 복사

  input.forEach((e, i) => {
    answer.push(sortedArr.indexOf(input[i]) + 1)
  })
  
  return answer;
}


// 2. 이중 for문
function solution2(input){
  let answer = [];

  for(i=0; i<input.length; i++){
    let temp = 1;

    for(j=0; j<input.length; j++){
      if(input[i] < input[j]) temp ++
    }

    answer.push(temp);
  }

  return answer;
}


// 3. 이중 for문 대신 map과 filter
function solution3(input){
  const arr = input.map((i) => input.filter((j) => i < j).length + 1)

  return arr;
}

const input = [87, 92, 92, 100, 76];

console.log(solution(input));
console.log(solution2(input));
console.log(solution3(input));

// 세 풀이 모두 문제에 맞는 답이 나왔다.
// 하지만 내가 원하는건 4, 2, 2, 1, 5등이 아닌,
// 3, 2, 2, 1, 4등이 나왔으면 좋겠다.