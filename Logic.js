//Split Array in into right and left
const array = [99, 44, 6, 2, 1, 5, 63, 87 ,63 ,28 ,8 ,95 ,24];   
lengthOfArray = array.length;
let middle = Math.floor(lengthOfArray/2);
const left = array.slice(0,middle);
const right = array.slice(middle);
console.log(middle);
console.log(left);
console.log(right);