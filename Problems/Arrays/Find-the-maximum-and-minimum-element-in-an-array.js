//Write a C function to return minimum and maximum in an array. Your program should make the minimum number of comparisons.
console.log("program started")
const FindMaxMinNumberInArray = (arr) => {
    /* If there is only one element 
        then return it as min and max both*/
    let min = arr[0];
    let max = arr[0];
    for(let i=1; i<arr.length;i++){
        if(min>arr[i]){
            min = arr[i];
        }
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return "Min:"+min+" "+"Max:"+max;
}

let arr = [65,8,3,127,74,9,5,7,95,4];
let result = FindMaxMinNumberInArray(arr);
console.log(result);

