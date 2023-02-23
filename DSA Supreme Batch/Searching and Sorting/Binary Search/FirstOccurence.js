//element should be sorted either increasing or decreasing
// Original Array: [1,3,4,4,4,4,4,4,6,7,9]
//Start  : 0th Index, End : nth Index
//Mid = (Start+End)/2

const firstOccurence = (arr,target) => {
    let start = 0;
    let end = arr.length-1;
    //let mid = Math.floor((start+end)/2);
    let mid = Math.floor(start+(end-start)/2); //To avoid integer overflow
    let index = -1;
    //console.log(mid);
    while(start<=end){
        if(arr[mid] === target){
            index = mid;
            //for finding first occurence
            end = mid-1;
            //for finding last occurence
            end = mid+1;
            //return mid;
        }
        else if(arr[mid]>target){
            //left search
            end = mid-1;
        }
        else if(arr[mid]<target){
            //right search
            start = mid+1;
        }
        mid = Math.floor(start+(end-start)/2)
    }
    return index;
}

let array = [1,3,4,4,4,4,4,4,6,7,9];
let target = 4;
const result = firstOccurence(array,target);
if(result === -1){
    console.log("element not found")
}
else{
    console.log("element first occurence found at index:"+result)
}
