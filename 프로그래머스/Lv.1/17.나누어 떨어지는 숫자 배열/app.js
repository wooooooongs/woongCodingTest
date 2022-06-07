function solution(arr, divisor) {
    let a = [];
    for(i=0; i<arr.length; i++){
        arr[i] % divisor === 0 ? a.push(arr[i]) : null;
    }
    a.sort((a,b) => a-b)
    
    return a.length === 0 ? [-1] : a
}

// sort()를 그냥 쓰면 ASCII 코드 순으로 정렬하기 때문에 꼭 a-b 리턴을 넣어준다.