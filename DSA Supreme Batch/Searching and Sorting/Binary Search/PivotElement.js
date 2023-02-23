//PivotElement
//element should be sorted either increasing or decreasing
// Original Array: [3,4,5,6,7,1,2]
//Start  : 0th Index, End : nth Index
//Mid = (Start+End)/2
//example pivot element: 7
const pivotElement = (arr) => {
    let start = 0;
    let end = arr.length-1;
    //let mid = Math.floor((start+end)/2);
    let mid = Math.floor(start+(end-start)/2); //To avoid integer overflow
    //console.log(mid);
    //[3,4,5,6,7,1,2]; mid:6
    while(start<end){
        if((mid+1<arr.length) && arr[mid] > arr[mid+1]){
            return mid;
        }
        if((mid-1>0) && arr[mid-1] > arr[mid]){
            return mid-1;
        }
        if(arr[start]>=arr[mid]){
             //left search
            end = mid-1;
        }
        else{
             //right search
            start = mid;
        }
        mid = Math.floor(start+(end-start)/2)
    }
    return start;
}

let arr = [9,4,5,6,7,1,2];
const result = pivotElement(arr);
if(result === -1){
    console.log("element not found")
}
else{
    console.log("pivot element found at index: "+result)
    console.log("pivot element is: "+arr[result]);
}
