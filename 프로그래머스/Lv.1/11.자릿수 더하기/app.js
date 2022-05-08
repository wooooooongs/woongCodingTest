function solution(n){
  let answer = 0;
  const arr = n.toString().split('').map((str)=>Number(str)).map((a) => answer += a)
  console.log(arr);
}

solution(987)