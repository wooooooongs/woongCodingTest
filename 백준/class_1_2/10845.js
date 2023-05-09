// 큐(S4-10845)

const cmdList = require('fs').readFileSync('input.txt').toString().split('\n');

const cmdNum = cmdList.shift();
const queue = [];
let result = '';

const queueFunc = (str) => {
  const [cmd, X] = str.split(' ');
  const isEmpty = queue.length === 0;

  switch (cmd) {
    case 'push':
      queue.push(X);
      break;
    case 'pop':
      isEmpty ? (result += '-1 \n') : (result += queue.shift() + '\n');
      break;
    case 'size':
      result += queue.length + '\n';
      break;
    case 'empty':
      result += Number(isEmpty) + '\n';
      break;
    case 'front':
      isEmpty ? (result += '-1 \n') : (result += queue[0] + '\n');
      break;
    case 'back':
      isEmpty ? (result += '-1 \n') : (result += queue.at(-1) + '\n');
      break;
  }
};

cmdList.forEach(queueFunc);

console.log(result.trim());
