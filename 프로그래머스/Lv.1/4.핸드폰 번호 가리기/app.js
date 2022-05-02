function solution(phone_number) {
  let arr = phone_number.split('').fill('*',0,-4).join('');
  return arr;
}

console.log(solution("01033334444"));
console.log(solution("027778888"));