function solution(numbers) {
  let resultArr = [];

  numbers = numbers.split('');

  const checkPrime = (num) => {
    if (num === 0 || num === 1) return false;

    for (i = 2; i * i <= num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const DFS = (fixedNum, arr) => {
    const isNotIncluded = !resultArr.includes(+fixedNum);
    const isEmptyArr = arr.length === 0;

    if (isNotIncluded) {
      resultArr.push(+fixedNum);
    }

    if (isEmptyArr) {
      return;
    }

    arr.forEach((_, i) => {
      const copiedArr = [...arr];
      let nextFixedNum = fixedNum.toString() + copiedArr.splice(i, 1);

      DFS(nextFixedNum, copiedArr);
    });
  };

  const generatePermutations = (() => {
    numbers.forEach((_, i) => {
      const originArr = [...numbers];
      const fixedNum = originArr.splice(i, 1);

      DFS(fixedNum[0], originArr);
    });
  })();

  return resultArr.filter((v) => checkPrime(v));
}

console.log(solution('17')); // [17, 7, 71];
console.log(solution('123')); // [13, 2, 23, 3, 31];
console.log(solution('011')); // [ 11, 101 ]
