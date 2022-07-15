function solution(arr) {
  let answer = arr[0];

  for(i=0; i<arr.length; i++){
    answer > arr[i] ? answer = arr[i] : null;
  }

  return answer;
}

let arr=[7, 3, 2, 9, 11];
console.log(solution(arr)); // 2 출력