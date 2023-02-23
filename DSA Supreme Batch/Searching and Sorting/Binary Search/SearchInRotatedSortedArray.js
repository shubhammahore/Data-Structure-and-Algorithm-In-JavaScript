//SearchInRotatedSortedArray
// Original Array: [0,1,2,3,4,5,6]
// Sorted and Rotated Array: [4,5,6,0,1,2,3]
//Start  : 0th Index, End : nth Index
//Mid = (Start+End)/2

const binarySearch = (arr, target, start, end) => {
  //let mid = Math.floor((start+end)/2);
  let mid = Math.floor(start + (end - start) / 2); //To avoid integer overflow
  //console.log(mid);
  while (start <= end) {
    let element = arr[mid];
    if (element === target) {
      return mid;
    } else if (target < element) {
      //left search
      end = mid - 1;
    } else {
      //right search
      start = mid + 1;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return -1;
};

const pivotElement = (arr) => {
  let start = 0;
  let end = arr.length - 1;
  //let mid = Math.floor((start+end)/2);
  let mid = Math.floor(start + (end - start) / 2); //To avoid integer overflow
  //console.log(mid);
  while (start < end) {
    if (mid + 1 < arr.length && arr[mid] > arr[mid + 1]) {
      return mid;
    }
    if (mid - 1 > 0 && arr[mid - 1] > arr[mid]) {
      return mid - 1;
    }
    if (arr[start] >= arr[mid]) {
      //left search
      end = mid - 1;
    } else {
      //right search
      start = mid;
    }
    mid = Math.floor(start + (end - start) / 2);
  }
  return start;
};

const searchInRotatedSortedArray = (arr, target) => {
    const pivotIndex = pivotElement(arr);
    console.log("pivot Index is : " +pivotIndex +" for the pivot element: " +arr[pivotIndex]);
    if (target >= arr[0] && target <= arr[pivotIndex]) {
        const ans = binarySearch(arr, target, 0, pivotIndex);
        return ans;
        //console.log("element found at index:" + result);
    }
    if (target >= arr[pivotIndex + 1] && target <= arr[arr.length - 1]) {
        const ans = binarySearch(arr, target, pivotIndex+1, arr.length);
        return ans;
        //console.log("element found at index:" + result);
    }
  return -1;
};

let arr = [4, 5, 6, 0, 1, 2, 3];
let target = 3;

const result = searchInRotatedSortedArray(arr, target);
console.log(result);


// if(result === -1){
//     console.log("element not found")
// }
// else{
//     console.log("element found at index:"+result)
// }
