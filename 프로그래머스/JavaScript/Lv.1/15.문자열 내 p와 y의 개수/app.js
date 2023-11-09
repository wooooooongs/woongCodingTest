function solution(s){
   
    let countP = 0;
    let countY = 0;

    const arr = s.toLowerCase().split('');


    for(i=0; i<arr.length; i++){
      arr[i] === 'p' ? countP ++ : null;
      arr[i] === 'y' ? countY ++ : null;
    }

    if(countP === countY){
        return true
    } else {
        return false
    }
}