function solution(input) {
  input = input.toUpperCase().replace(/[^A-Z]/g, '')
  console.log(input);

  if(input.split('').reverse().join('') === input) return 'YES';
  else return 'NO';

}

const input = 'found7, time: study; Yduts; emit, 7Dnuof';

console.log(solution(input));