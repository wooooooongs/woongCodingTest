function sol(answer) {
  let [supo1_arr, supo2_arr, supo3_arr] = [[], [], []];
  let [supo1_answer, supo2_answer, supo3_answer] = [[], [], []];
  let answers = [];
  const supo1 = [1, 2, 3, 4, 5];
  const supo2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const supo3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (j = 0; j < answer.length; j++) {
    if (supo1[j] === undefined) supo1_arr.push(supo1[j - 5]);
    else supo1_arr.push(supo1[j]);
  }
  for (j = 0; j < answer.length; j++) {
    if (supo2[j] === undefined) supo2_arr.push(supo2[j - 8]);
    else supo2_arr.push(supo2[j]);
  }
  for (j = 0; j < answer.length; j++) {
    if (supo3[j] === undefined) supo3_arr.push(supo3[j - 10]);
    else supo3_arr.push(supo3[j]);
  }

  supo1_answer = supo1.filter((v, i) => v === answer[i]);
  supo2_answer = supo2.filter((v, i) => v === answer[i]);
  supo3_answer = supo3.filter((v, i) => v === answer[i]);

  let max = Math.max(
    supo1_answer.length,
    supo2_answer.length,
    supo3_answer.length
  );

  if (supo1_answer.length === max) answers.push(1);
  if (supo2_answer.length === max) answers.push(2);
  if (supo3_answer.length === max) answers.push(3);

  return answers;
}

console.log(sol([1, 2, 3, 4, 5]));
console.log(sol([1, 2, 3, 4, 5, 4, 3, 2, 1]));
console.log(sol([1, 3, 2, 4, 2]));

// 1번 수포자: 1, 2, 3, 4, 5
// 2번 수포자: 2, 1, 2, 3, 2, 4, 2, 5
// 3번 수포자: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5
