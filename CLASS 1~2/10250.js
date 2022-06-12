const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

for(j=1; j<input.length; j++){
  let arr = input[j].split(' ');
  const h = +arr[0]
  const n = +arr[2] // 10번째 손님
  let room = [0,1];

  for(i=0; i<n; i++){
    room[0] += 1
    room[0] > h ? (room[1] += 1, room[0] -= h) : false
  }

  room[1] < 10 ? (room[1].toString(), room[1] = '0' + room[1]) : room[1]
  const answer = room.map((v) => v.toString())

  console.log(answer.join(''));
}
