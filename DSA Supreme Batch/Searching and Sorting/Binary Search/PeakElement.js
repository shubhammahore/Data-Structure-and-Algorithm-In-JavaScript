//PeakElement
//element should be sorted either increasing or decreasing
// Original Array: [1,3,7,9,11,13,15,19]
//Start  : 0th Index, End : nth Index
//Mid = (Start+End)/2

const peakElement = (arr) => {
    let start = 0;
    let end = arr.length-1;
    //let mid = Math.floor((start+end)/2);
    let mid = Math.floor(start+(end-start)/2); //To avoid integer overflow
    //console.log(mid);
    let peakElement = arr[end];
    while(start<=end){
        // if(arr[mid] === target){
        //     return mid;
        // }
        //[1,3,7,9,11,13,15,19]
        if(arr[mid]<arr[start]){
            end = mid-1;
        }
        else{
            start = mid+1;
            peakElement = mid;
        }
        mid = Math.floor(start+(end-start)/2)
    }
    return peakElement;
}

let array = [1,3,7,9,11,13,15,19];
const result = peakElement(array);
console.log("peak element found at index:"+result+"  which is :"+array[result]);

