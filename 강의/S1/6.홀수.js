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
console.log(solution(arr));