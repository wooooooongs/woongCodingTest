function solution(arr){
  let sum = arr.reduce((a, b) => a + b);
  let answer = arr

  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(sum - (arr[i] + arr[j]) == 100){
        answer.splice(j,1);
        answer.splice(i,1);
      }
    }
  }
  return answer
}

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr));

// 모든 수를 구해야 함.