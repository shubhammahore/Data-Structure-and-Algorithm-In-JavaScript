const numbers = [99, 44, 6, 2, 1, 5, 63, 87 ,63 ,28 ,8 ,95 ,24];

function mergeSort(array){
    if(array.length === 1){
        return array;
    }
    //Split Array in into right and left
    
    lengthOfArray = array.length;
    let middle = Math.floor(lengthOfArray/2);
    const left = array.slice(0,middle);
    const right = array.slice(middle);
    //console.log(middle);
    // let left = [];
    // let right = [];
    // for(let i=0; i<middle; i++){
    //     left.push(array[i]);
    // }
    // for(let j=middleIndex; j<lengthOfArray; j++){
    //     right.push(array[j]);
    // }
    // console.log(array);
    console.log('left',left);
    console.log('right',right);
    //return arr1;
    return merge(
        mergeSort(left),mergeSort(right)
    )
}
function merge(left, right){
    const result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while(leftIndex < left.length && rightIndex < right.length){
        if(left[leftIndex]<right[rightIndex]){
            result.push(left[leftIndex]);
            leftIndex++;
        }
        else{
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const answer = mergeSort(numbers);
console.log(answer);