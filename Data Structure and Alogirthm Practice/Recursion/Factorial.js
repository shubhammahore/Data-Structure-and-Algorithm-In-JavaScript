function findFactorialOfNumber(n){
    if(n===0){
        return 0;
    }
    else if(n===1){
        return 1;
    }
    else {
        return n*findFactorialOfNumber(n-1);
    }
}
//5*4*3*2*1
//console.log(findFactorialOfNumber(5));

function findFactorialOfNumberByIteration(n){
    let result = 1;
    for(let i=n;i>0;i--){
        result = result*i;
    }
    return result;
}

const result = findFactorialOfNumber(9);
const result2 = findFactorialOfNumberByIteration(9);
console.log(result);
console.log(result2);