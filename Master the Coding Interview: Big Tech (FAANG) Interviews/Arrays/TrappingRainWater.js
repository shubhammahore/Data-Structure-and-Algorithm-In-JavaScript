/**
 * @param {number[]} height
 * @return {number}
 */

var trap = function(height) {
    let totalWater = 0;
    let left=0,right=height.length-1,maxLeft=0,maxRight=0;
    while(left < right){
        if(height[left] <= height[right]){
            if(height[left] >= maxLeft)
                maxLeft = height[left];
            else
                totalWater += maxLeft - height[left];
            left++;
        }
        else{
            if(height[right] >= maxRight)
                maxRight = height[right];
            else
                totalWater += maxRight - height[right];
            right--;
        }
    }
    return totalWater;
};
/*
var trap = function(height) {
    let totalWater = 0;
    for(let p=0;p<height.length;p++){
        let leftP=p,rightP=p;
        let maxLeft = 0,maxRight = 0;
        while(leftP >= 0){
            maxLeft = Math.max(maxLeft,height[leftP]);
            leftP--;
        }
        while(rightP < height.length){
            maxRight = Math.max(maxRight,height[rightP]);
            rightP++;
        }
        const currentWater = Math.min(maxLeft,maxRight)-height[p];
        if(currentWater >= 0){
            totalWater += currentWater;
        }
    }
    return totalWater;
};
*/

let arr = [0,1,0,2,1,0,1,3,2,1,2,1];
const result = trap(arr);
console.log(result);