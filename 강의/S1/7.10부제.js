function solution(n, arr){
  let temp = [];

  for(let i = 0; i < arr.length; i++){
    arr[i] % 10 == n ? temp.push(arr[i]) : null;
  }
  
  return temp.length;
}

let arr = [12, 20, 54, 30, 87, 91, 30];


console.log(solution(0, arr));
// 3 출력