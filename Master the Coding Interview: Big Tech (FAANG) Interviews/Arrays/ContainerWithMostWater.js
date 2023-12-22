/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length<1){
        return 0;
    }
    let max = 0;
    let p1 = 0;
    let p2 = height.length-1;
    while(p1<p2){
        let a = height[p1];
        let b = height[p2];
        let minValue = Math.min(a,b);
        let area = minValue * (p2-p1);
        max = Math.max(area,max);
        if(a<=b){
            p1++;
        }
        else{
            p2--;
        }       
    }
    return max;
};

const arr = [1,8,6,2,5,4,8,3,7];
const result = maxArea(arr);
console.log(result);