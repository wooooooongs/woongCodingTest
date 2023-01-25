function solution(s){
  let arr = [];

  for(i=0; i<s.length; i++){
    if(s.charCodeAt(i) < 91) arr.push(s.charCodeAt(i))
  }
  console.log(arr);
  return arr.length;
}

let str="KoreaTimeGood";
console.log(solution(str)); // 3