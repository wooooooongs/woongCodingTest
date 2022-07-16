function solution(n, arr){
  let temp = [];

  for(let i = 0; i < arr.length; i++){
    arr[i] % 10 == n ? temp.push(arr[i]) : null;
  }
  
  return temp.length;
}

let arr = [12, 20, 54, 30, 87, 91, 30];

// 배열.push를 쓰지 않고
function solution2(n, arr){
  let answer = 0;
  for(let x of arr){
    if(x % 10 === 0) answer ++;
  }
  return answer
}


console.log(solution(0, arr));
console.log(solution2(0, arr));
// 3 출력