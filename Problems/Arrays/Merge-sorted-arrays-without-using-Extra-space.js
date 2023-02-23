//Merge 2 sorted arrays without using Extra space.
//Merge Without Extra Space
/*
Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order. Merge them in sorted order without using any extra space. Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.
 
Example 1:
Input: 
n = 4, arr1[] = [1 3 5 7] 
m = 5, arr2[] = [0 2 6 8 9]
Output: 
arr1[] = [0 1 2 3]
arr2[] = [5 6 7 8 9]
Explanation:
After merging the two 
non-decreasing arrays, we get, 
0 1 2 3 5 6 7 8 9.
*/


const mergeWithoutExtraSpace = (arr1,arr2) => {
    let mergedArray = [];
    if(arr1.length === 0)
    return arr2;
    if(arr2.length === 0)
    return arr1;
    let arrayItem1 = arr1[0];
    let arrayItem2 = arr2[0];
    let i,j=1;
    while(arrayItem1 || arrayItem2){
        if(!arrayItem1 && arrayItem1<arrayItem2 ){
            mergedArray.push(arrayItem1);
            arrayItem1 = arr1[i];
            i++;
        }
        else{
            mergedArray.push(arrayItem2);
            arrayItem2 = arr2[j];
            j++;
        }
    }
    return mergedArray;
}
 
const result = mergeWithoutExtraSpace([0, 3, 4, 31], [4, 6, 30]);
console.log(result);


//Approach 2
function merge(m,n)
    {
        // Iterate through all elements of ar2[] starting from
        // the last element
        for (let i=n-1; i>=0; i--)
        {
            /* Find the smallest element greater than ar2[i]. Move all
               elements one position ahead till the smallest greater
               element is not found */
            let j, last = arr1[m-1];
            for (j=m-2; j >= 0 && arr1[j] > arr2[i]; j--)
                arr1[j+1] = arr1[j];
      
            // If there was a greater element
            if (last > arr2[i])
            {
                arr1[j+1] = arr2[i];
                arr2[i] = last;
            }
        }
    }

//Approach 3 
function merge2(n , m) {
    var i = 0;
    var temp = 0;

    // While loop till last element
    // of array 1(sorted)
    // is greater than first element
    // of array 2(sorted)
    while (arr1[n - 1] > arr2[0]) {
        if (arr1[i] > arr2[0]) {

            // Swap arr1[i] with first element
            // of arr2 and sorting the updated
            // arr2(arr1 is already sorted)
            // swap(arr1[i],arr2[0]);
            temp = arr1[i];
            arr1[i] = arr2[0];
            arr2[0] = temp;
            arr2.sort((a,b)=>a-b);
        }
        i++;
    }
}




















/*
Example 2:

Input: 
n = 2, arr1[] = [10, 12] 
m = 3, arr2[] = [5 18 20]
Output: 
arr1[] = [5 10]
arr2[] = [12 18 20]
Explanation:
After merging two sorted arrays 
we get 5 10 12 18 20.

Your Task:
You don't need to read input or print anything. You only need to complete the function merge() that takes arr1, arr2, n and m as input parameters and modifies them in-place so that they look like the sorted merged array when concatenated.
 

Expected Time Complexity:  O((n+m) log(n+m))
Expected Auxilliary Space: O(1)
*/