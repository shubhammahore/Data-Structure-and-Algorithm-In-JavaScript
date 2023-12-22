/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // let indices = [];
    // for(let i=0;i<nums.length;i++){
    //     let numberToFind = target - nums[i];
    //     for(let j=i+1;j<nums.length;j++){
    //         if( numberToFind===nums[j]){
    //             indices.push(i,j)
    //             return indices;
    //         }
    //     }
    // } 
    let numsMap = {}
    for(let i=0;i<nums.length;i++){
        const currentMapVal = numsMap[nums[i]];
        if(currentMapVal >= 0){
            return [currentMapVal,i];
        }
        else{
            const numberToFind = target - nums[i];
            numsMap[numberToFind] = i;
        }
    }
    return undefined;
};

const nums = [9,3,7,3,15,4];
const target = 6;
const result = twoSum(nums,target);
console.log(result);