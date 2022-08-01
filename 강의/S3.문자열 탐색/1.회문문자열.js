function solution(input) {
  let arr = [...input.toUpperCase()];
  let reverseArr = [];

  for(i=arr.length-1; i>=0; i--){
    reverseArr.push(arr[i]);
  }

  if(arr.join('') === reverseArr.join('')) return 'YES';
  else return 'NO'
}

const input = 'gooG';

console.log(solution(input));