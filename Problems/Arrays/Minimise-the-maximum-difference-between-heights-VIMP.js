//Minimise-the-maximum-difference-between-heights-VIMP
/*
Given an array arr[] denoting heights of N towers and a positive integer K.

For each tower, you must perform exactly one of the following operations exactly once.

Increase the height of the tower by K
Decrease the height of the tower by K
Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

You can find a slight modification of the problem here.
Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.


Example 1:

Input:
K = 2, N = 4
Arr[] = {1, 5, 8, 10}
Output:
5
Explanation:
The array can be modified as 
{3, 3, 6, 8}. The difference between 
the largest and the smallest is 8-3 = 5.
*/

const getMinDiff = (arr,k) => {
    let n = arr.length;
    let max = arr[n-1];
    let min = arr[0];
    let res = max-min;
    for(let i=1; i<n;i++){
        if(arr[i]<k){
            continue;
        }
        max = Math.max(arr[i-1]+k,arr[n-1]-k)
        min = Math.min(arr[i]-k,arr[0]+k)
        res = Math.min(res,max-min);
    }
    return res;
}



const array = [3, 9, 12, 16, 20]//[1, 5, 8, 10]; // {3, 9, 12, 16, 20} k=3
const k = 3;
const result = getMinDiff(array,k);
console.log(result);


// Arrays.sort(arr);
// int max=arr[n-1];
// int min=arr[0];
// int res=max-min;

// for(int i=1; i<n; i++){
//     if(arr[i]<k)
//         continue;
//     max=Math.max(arr[i-1]+k, arr[n-1]-k);
//     min=Math.min(arr[i]-k, arr[0]+k);
//     res=Math.min(res, max-min);
// }
// return res;





















/*
Your Task:
You don't need to read input or print anything. Your task is to complete the function getMinDiff() which takes the arr[], n, and k as input parameters and returns an integer denoting the minimum difference.


Expected Time Complexity: O(N*logN)
Expected Auxiliary Space: O(N)

Constraints
1 ≤ K ≤ 104
1 ≤ N ≤ 105
1 ≤ Arr[i] ≤ 105
*/