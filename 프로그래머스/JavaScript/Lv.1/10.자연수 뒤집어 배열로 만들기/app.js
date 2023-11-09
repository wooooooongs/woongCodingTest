function solution(n){
  const arr = n + '';
  const answer = arr.split('').map((a)=> Number(a)).reverse();
  console.log(answer);
}

solution(1813)