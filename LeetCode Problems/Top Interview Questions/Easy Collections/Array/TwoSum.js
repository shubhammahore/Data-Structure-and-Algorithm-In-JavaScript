// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order
// https://leetcode.com/explore/interview/card/top-interview-questions-easy/92/array/546/

/*
Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 

Constraints:

2 <= nums.length <= 104
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.
 

Follow-up: Can you come up with an algorithm that is less than O(n2) time complexity?
*/
var twoSum = function(nums, target) {
    let result = [];
    let map = {};
    for (let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        if(map[complement] !== undefined){
            return [map[complement],i];
        }
        map[nums[i]] = i;
    }

    
    // let map = [];
    // for (let i = 0; i < nums.length; i++) {
    //     let complement = target - nums[i];
    //     if (map[complement] !== undefined) {
    //         return [map[complement], i];
    //     }
    //     map[nums[i]] = i;
    // }

    // let map = new Map();
    // for (let i = 0; i < nums.length; i++) {
    //     let complement = target - nums[i];
    //     if (map.has(complement)) {
    //         return [map.get(complement), i];
    //     }
    //     map.set(nums[i], i);
    // }


    // for (let i = 0; i < nums.length; i++) {
    //   //console.log("_______________");
    //   //console.log("for i="+i + " => "+ arr[i]);
    //   for (let j = i + 1; j < nums.length; j++) {
    //     //console.log(j-1 + "-> "+ arr[j]);
    //     //console.log("sum:"+ (arr[i]+arr[j]));
    //     let sum = nums[i] + nums[j];
    //     if (sum == target) {
    //       result.push(i,j);
    //       //result.push(j);
    //       return result;
    //       //return "Indices are:"+i+" ,"+j;
    //     }
    //   }
    // }
  };

let arr = [3,2,3];
let target = 6;
const result = twoSum(arr, target);
console.log(result);