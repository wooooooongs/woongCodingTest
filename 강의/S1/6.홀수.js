// 배열 메서드, reduce 사용
function solution(arr) {
  let oddArr = [];
  
  for(i=0; i<arr.length; i++){
    arr[i] % 2 == 1 ? oddArr.push(arr[i]) : null;
  }

  const sum = oddArr.reduce((acc, cur) => acc + cur)
  const min = Math.min(...oddArr);

  return sum + '\n' + min
}

let arr = [12, 77, 38, 41, 53, 92, 85];

// for of를 쓰기
function solution2(arr){
  let answer;
  let sum = 0, min = 1000;

  for(let x of arr) {
    if(x%2 === 1){
      sum += x;
      if(x<min) min=x;
    }
  }

  return answer = sum + '\n' + min
}

console.log(solution(arr));
console.log(solution2(arr));
// 둘 다 256 41 출력