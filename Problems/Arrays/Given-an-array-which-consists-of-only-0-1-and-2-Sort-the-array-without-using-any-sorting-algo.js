console.log("----------------------");
//Given-an-array-which-consists-of-only-0-1-and-2-Sort-the-array-without-using-any-sorting-algo
//Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
// Input: 
// N = 5
// arr[]= {0 2 1 2 0}
// Output:
// 0 0 1 2 2
// Explanation:
// 0s 1s and 2s are segregated 
// into ascending order.
// Constraints:
// 1 <= N <= 10^6
// 0 <= A[i] <= 2
// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)
const sortArray = (arr) => {
    let lo = 0; 
    let hi = arr.length - 1; 
    let mid = 0;
    let temp = 0; 
    
    while (mid <= hi)
    {
        if(arr[mid] == 0)
        {
            temp = arr[lo]; 
            arr[lo] = arr[mid]; 
            arr[mid] = temp; 
            lo++; 
            mid++; 
        }
        else if(arr[mid] == 1)
        {
            mid++; 
        }
        else
        {
            temp = arr[mid]; 
            arr[mid] = arr[hi]; 
            arr[hi] = temp; 
            hi--;
        }
    }
 return arr;
}
const arr =   [0,2,1,2,0] //[5,9,1,35,0];
const result = sortArray(arr);
console.log(result);