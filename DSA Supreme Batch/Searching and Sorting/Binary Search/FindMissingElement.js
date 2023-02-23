//FindMissingElement
//element should be sorted either increasing or decreasing
// Original Array: [1,2,3,4,5,7,8]
//Start  : 0th Index, End : nth Index
//Mid = (Start+End)/2 or start+(end-start)/2

const findMissingElement = (arr) => {
    let start = 0;
    let end = arr.length-1;
    //let mid = Math.floor((start+end)/2);
    let mid = Math.floor(start+(end-start)/2); //To avoid integer overflow
    //console.log(mid);
    while(start<=end){
        let mid = Math.floor((start + end) / 2);

        if (arr[mid] !== mid + 1 && arr[mid - 1] === mid) {
          return mid + 1;
        }
    
        if (arr[mid] !== mid + 1) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
        mid = Math.floor(start+(end-start)/2)
    }
    return -1;
}

let array = [1,2,3,4,5,7,8];
const result = findMissingElement(array);
if(result === -1){
    console.log("element not found")
}
else{
    console.log("missing element found at index:"+result+"  which is :"+array[result])
}
