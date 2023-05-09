function solution(arr) {
  let answer = arr[0];

  for(i=0; i<arr.length; i++){
    answer > arr[i] ? answer = arr[i] : null;
  }

  return answer;
}

let arr=[7, 3, 2, 9, 11];

// 전개 연산자
function solution2(arr) {
  let answer = Math.min(...arr);

  return answer;
}

//apply()
function solution3(arr) {
  let answer = Math.min.apply(null, arr);

  return answer;
}


console.log(solution(arr)); // 2 출력
console.log(solution2(arr)); // 2 출력
console.log(solution3(arr)); // 2 출력