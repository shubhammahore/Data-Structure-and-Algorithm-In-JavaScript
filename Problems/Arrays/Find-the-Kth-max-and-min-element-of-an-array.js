console.log("Started");
//Given an array arr[] and an integer K where K is smaller than size of array,
// the task is to find the Kth smallest element in the given array.
// It is given that all array elements are distinct.
// Expected Time Complexity: O(n)
// Expected Auxiliary Space: O(log(n))
// Constraints:
// 1 <= N <= 105
// 1 <= arr[i] <= 105
// 1 <= K <= N
const FindKthMaxMinElementInArray = (arr,k) => {
    //write your code here ...
    //First sort the array using merge sort or quick sort then find nth min element
    let sortedArray = mergeSort(arr);
    //let sortedArray1 = arr.sort((a, b) => a - b); // numbers.sort(comparator)  should be used to sort numbers
    console.log(sortedArray);
    //console.log(sortedArray1);
    return sortedArray[k-1];
}
const mergeSort = (array) => {
    if(array.length===1){
        return array;
    }
    //Split the array into left and right part
    const lengthOfArray = array.length;
    const middle = Math.floor(lengthOfArray/2);
    const left = array.slice(0,middle);
    const right = array.slice(middle);
    const leftSorted =  mergeSort(left);
    const rightSorted =  mergeSort(right);
    return merge(leftSorted,rightSorted);
}
const merge = (left, right) => {
    let leftIndex = 0;
    let rightIndex = 0;
    let result = [];
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex] < right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex).concat(right.slice(rightIndex)));
}

//let arr = [65,8, 3,127,74,9,5,7,95,4,1];
let arr = [ 12, 3, 5, 7, 19 ];
let KthElement = 2;
let result = FindKthMaxMinElementInArray(arr,KthElement);
console.log(result);
