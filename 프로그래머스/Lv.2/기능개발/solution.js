function solution(progresses, speeds) {
  const answer = [];
  const daysToFinish = progresses.map((progress, index) => Math.ceil((100 - progress) / speeds[index]));
  let finishedTask = 1;
  let maxNum = daysToFinish[0];

  for (i = 1; i < daysToFinish.length; i++) {
    if (maxNum <= daysToFinish[i]) {
      maxNum = daysToFinish[i];
      answer.push(finishedTask);
      finishedTask = 1;
    } else {
      finishedTask++;
    }
  }

  answer.push(finishedTask);

  return answer;
}

const arr1 = [93, 30, 55];
const arr2 = [1, 30, 5];
const arr3 = [95, 90, 99, 99, 80, 99];
const arr4 = [1, 1, 1, 1, 1, 1];

console.log(solution(arr1, arr2));
console.log(solution(arr3, arr4));
