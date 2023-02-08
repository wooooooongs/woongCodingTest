function solution(array, commands) {
  return commands.map((command) => {
    const [start, end, position] = command;
    const answerArray = array
      .filter((value, index) => index >= start - 1 && index <= end - 1)
      .sort((a, b) => a - b);
    return answerArray[position - 1];
  });
}

const arr1 = [1, 5, 2, 6, 3, 7, 4];
const commands1 = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(arr1, commands1)); // [5, 6, 3]
