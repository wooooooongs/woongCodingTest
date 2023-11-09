function solution(array, commands) {
  const a = commands.reduce((arr, command) => {
    const tempArr = array.slice(command[0] - 1, command[1]).sort((a, b) => a - b);

    arr.push(tempArr[command[2] - 1]);

    return arr;
  }, []);

  return a;
}

const arr1 = [1, 5, 2, 6, 3, 7, 4];
const commands1 = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(arr1, commands1)); // [5, 6, 3]
