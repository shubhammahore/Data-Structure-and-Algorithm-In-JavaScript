//element should be sorted either increasing or decreasing
// Original Array: [1,3,7,9,11,13,15,19]
//Start  : 0th Index, End : nth Index
//Mid = (Start+End)/2


//
const binarySearch1 = (arr,target) => {
    let start = 0;
    let end = arr.length-1;
    //let mid = Math.floor((start+end)/2);
    let mid = Math.floor(start+(end-start)/2); //To avoid integer overflow
    //console.log(mid);
    //[1,3,7,9,11,13,15,19]; mid:11 target:7
    while(start<=end){
        let midElement = arr[mid];
        if(midElement === target){
            return mid;
        }
        else if(target < midElement){
             //left search
            end = mid-1;
        }
        else{
             //right search //if target > midElement
            start = mid+1;
        }
        mid = Math.floor(start+(end-start)/2)
    }
    return -1;
}

let arr = [1,3,7,9,11,13,15,19];
let target = 7;
const result = binarySearch1(arr,target);
if(result === -1){
    console.log("element not found")
}
else{
    console.log("element found at index:"+result)
}
