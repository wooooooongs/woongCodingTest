let count = 0;

function a(n) {
  const N = 1;
  if(n < 10) n = '0' + n

  let arr = n.toString().split('').map((v) => +v);
  if(arr.length == 3) arr.shift(); // [0, 0, 7] 이 나올 경우

  let sum = arr[0] + arr[1];
  
  let arr2 = 0;
  let sum2 = 0;

  if(sum >= 10){
    arr2 = sum.toString().split('');
    sum2 = arr[1].toString() + arr2[1];
  } else {
    arr2 = sum;
    sum2 = arr[1].toString() + arr2;
  }

  count++
  
  if(sum2 == N) return count;
  else return a(sum2)
}

// 다른 방법을 생각해내야함..
// 문자열로 바꿔서 하는 방법은 비효율적임.
// Math.floor(숫자 % 10), 숫자 / 10을 이용하는 방법이 있다.
console.log(a(1));