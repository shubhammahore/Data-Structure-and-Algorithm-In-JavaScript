//Find-the-Union-and-Intersection-of-the-two-sorted-arrays
// Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.
// Union of the two arrays can be defined as the set containing distinct elements from both the arrays. If there are repetitions, then only one occurrence of element should be printed in the union.
// Input:
// 5 3
// 1 2 3 4 5
// 1 2 3
// Output: 
// 5

const findUnionOfTwoArray =(a,b)=>{
    let n = a.length;
    let m = b.length;
    // let count = 0;
    // for(let i=0;i<a.length;i++){
    //     for(let j=0;j<b.length;j++){
    //         if(a[i] === b[j]){
    //             count++;
    //             //console.log(count+" matched " + a[i]);
    //         } 
    //     }
    // }
    // return n+m-count;
    // Defining set container s
    var s = new Set();
 
    // Inserting array elements in s
    for (let i = 0; i < n; i++)
        s.add(a[i]);

    for (let i = 0; i < m; i++)
        s.add(b[i]);
    return s.size;
}

let arr1 = [7, 1, 5, 2, 3, 6];
let arr2 = [3, 8, 6, 20, 7];
// 1 2 3
let result = findUnionOfTwoArray(arr1,arr2);
console.log(result);