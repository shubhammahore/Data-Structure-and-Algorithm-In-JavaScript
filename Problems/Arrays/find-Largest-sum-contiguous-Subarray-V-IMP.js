//find-Largest-sum-contiguous-Subarray-V-IMP
// Given an array Arr[] of N integers. Find the contiguous sub-array
// (containing at least one number) 
// which has the maximum sum and return its sum.
// Input:
// N = 5
// Arr[] = {1,2,3,-2,5}
// Output:
// 9
// Explanation:
// Max subarray sum is 9
// of elements (1, 2, 3, -2, 5) which 
// is a contiguous subarray.
//subArray = n*(n+1)/2 
// Expected Time Complexity: O(N)
// Expected Auxiliary Space: O(1)
console.log("----------------------");

const largestSumContiguousSubArray = (arr) => {
    let sum=0;
   
    var maxint = Math.pow(2, 53)
    console.log(maxint)
    var max_so_far = -maxint - 1
    var max_ending_here = 0
     
    for (var i = 0; i < arr.length; i++)
    {
        max_ending_here = max_ending_here + arr[i]
        if (max_so_far < max_ending_here)
            max_so_far = max_ending_here

        if (max_ending_here < 0)
            max_ending_here = 0 
    }
    return max_so_far
    
    //{0,1,2,3,4}
    //{0}, {0,1}, {0,1,2}, {0,1,2,3}, {0,1,2,3,4}
    //{i}, {i,i+1}, {i,i+1,i+2}, {i,i+1,i+2,i+3}, {i,i+1,i+2,i+3,i+4}
    //first generate contiguous sub-array from given array 
    //subarray should be in exact sequence as the sequence of the elements in the array
    //{1,2,3,-2,5} : {1},{1,2},{1,2,3},{1,2,3},{1,2,3,-2},{1,2,3,-2,5},
                   //{2},{2,3},{2,3,-2},{2,3,-2,5}
                   //{3},{3,-2},{3,-2,5}
                   //{-2},{-2,5}
                   //{5}

    // let subArray = [];
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i; j<arr.length;j++){
    //         let minsubArray = [];
    //         for(let k=i;k<=j;k++){
    //             minsubArray.push(arr[k])
    //         }
    //         subArray.push(minsubArray);
    //     }   
    // }
    // let res = [];
    // subArray.map(x => res.push(x.reduce(
    //     (accumulator, currentValue) => accumulator + currentValue,
    //     0
    //   )));
    // console.log(res);
    // return Math.max(...res);
}


let array = [1,2,3,-2,5];
//1,2,3,-2,5, //1+2+3-2+5=9
let result = largestSumContiguousSubArray(array);
console.log(result);


// A contiguous subarray is simply a subarray of an array with a condition that the elements of the subarray should be in exact sequence 
// as the sequence of the elements in the array. for example if the array is [1,2,3,4,5] then [1,3,5] is a subarray of the array,
//  but not a contiguous subarray since the sequence does not match as the elements 2 and 4 are skipped. 
// [1,2,3] will be one of the contiguous subarrays.
// for(let i=0; i<arr.length; i++){
//     for(let j=i; j<arr.length; j++){
//          // Print subarray between current
//         // starting and ending points
//         for(let k = i; k <= j; k++)
//         subArray.push(arr[k]);
//     }
//     //console.log(subArray);
// }