function c(num){
  let value = num;
  let count = 0;

  while(value !== 1){
    value % 2 === 0 ? value /= 2 : value = (value * 3) +1;
    count++;
    if(count === 500){
      count = -1;
      break;
    }
  }
  console.log(count);
}

c(16)