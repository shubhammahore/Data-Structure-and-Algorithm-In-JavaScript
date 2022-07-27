//move-negative-numbers-beginning-positive-end-constant-extra-space
//Sequence doesnt matter only Negative should be on left
console.log("-----------------");
// Input: -12, 11, -13, -5, 6, -7, 5, -3, -6
// Output: -12 -13 -5 -7 -3 -6 11 6 5
const moveNegativeNumbers = (arr) => {
    let j=0;
    for(let i=0; i<arr.length;i++){
        if(arr[i]<0 && i!=j ){
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            j++;
        }
    }
    return arr;
}

const arr =   [-12, 11, -13, -5, 6, -7, 5, -3, -6] //[5,9,1,35,0];
const result = moveNegativeNumbers(arr);
console.log(result);

