//BinarySearchInNearlySortedArray.js


const binarySearchInNearlySortedArray = (arr,target)=> {
    let start = 0;
    let end = arr.length;
    let mid = start+ (end-start)/2;

    while(start<=end){
        if(arr[mid] == target){
            return mid;
        }
        if(arr[mid+1] == target){
            return mid+1;
        }
        if(arr[mid-1] == target){
            return mid-1;
        }
        if(arr[mid] > target){
            end = mid-2;
        }
        else{
            end = mid+2;
        }
        mid = start+ (end-start)/2;
    }
    return start;
}

let array = [10,3,40,20,50,80,70];
let target = 40;

const result = binarySearchInNearlySortedArray(array,target);
console.log(result);