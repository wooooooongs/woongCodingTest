function solution1(n, arr1, arr2) {
  let newArr = [];

  arr1 = arr1.map((num) => {
    num = num.toString(2).split('');

    while (num.length === n - 1) {
      num.unshift('0');
    }

    return num.join('');
  });

  arr2 = arr2.map((num) => {
    num = num.toString(2).padStart(n, '0');

    return num;
  });

  for (i = 0; i < n; i++) {
    let row = [];

    for (j = 0; j < n; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        row.push('#');
      } else if (arr1[i][j] === arr2[i][j] && arr1[i][j] === '0') {
        row.push(' ');
      } else {
        row.push('#');
      }
    }

    newArr.push(row);
  }

  return arr2;
}

function solution2(n, arr1, arr2) {
  let newArr = [];

  arr1 = arr1.map((num) => num.toString(2).padStart(n, '0'));
  arr2 = arr2.map((num) => num.toString(2).padStart(n, '0'));

  for (i = 0; i < n; i++) {
    let row = [];

    for (j = 0; j < n; j++) {
      if (arr1[i][j] !== arr2[i][j]) {
        row.push('#');
      } else if (arr1[i][j] === arr2[i][j] && arr1[i][j] === '0') {
        row.push(' ');
      } else {
        row.push('#');
      }
    }

    newArr.push(row);
  }

  return newArr.map((r) => r.join(''));
}

function solution3(n, arr1, arr2) {
  let answer = [];

  for (i = 0; i < n; i++) {
    answer.push((arr1[i] | arr2[i]).toString(2).padStart(n, 0).replaceAll('1', '#').replaceAll('0', ' '));
  }

  return answer;
}
