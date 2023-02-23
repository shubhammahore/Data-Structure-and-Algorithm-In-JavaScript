//Search nearby SquareRoot of number in array
//Search Space: for UnderRoot 100 is between 0-100

//[0,1,2,3,4,5,6,7,8,9,10]
const squareRootWithPrecision = (num) => {
    let target = num;
    let start = 0;
    let end = num+1;
    let mid = start + (end-start)/2;
    let ans = num;
    while(start<=end){
        if(mid*mid === target){
            return mid;
        }
        if(mid*mid > target){
            // search left
            end = mid-1;
        }
        else{
            //answer store
            ans = mid;
            //search right
            start = mid+1;
        }
        mid = start + (end-start)/2;
    }
    return ans;
}

const squareRoot = (num) => {
    let target = num;
    let start = 0;
    let end = num+1;
    let mid = Math.floor(start + (end-start)/2);
    let ans = num;
    while(start<=end){
        if(mid*mid === target){
            return mid;
        }
        if(mid*mid > target){
            // search left
            end = mid-1;
        }
        else{
            //answer store
            ans = mid;
            //search right
            start = mid+1;
        }
        mid = Math.floor(start + (end-start)/2);
    }
    return ans;
}

let num = 11;
const result = squareRoot(num);
console.log("square root is: "+result);
let finalAnswer = result;
let precision = 2;
let step = 0.1;
for(let i=0;i<precision;i++){
    for(let j=finalAnswer;j*j<=num; j=j+step){
        finalAnswer = j;
    }
    step = step/10;
}
console.log("precise square root is: "+finalAnswer);










