//Write-a-program-to-cyclically-rotate-an-array-by-one
// Input:
// N = 5
// A[] = {1, 2, 3, 4, 5}
// Output:
// 5 1 2 3 4

const rotateAnAarray = (arr) =>{
    let holdingElement = arr[arr.length-1];
    for(let i=0; i<arr.length; i++){
        //swap index elements to right
        let temp = arr[i];
        arr[i] = holdingElement;
        holdingElement = temp;
    }
    return arr;
}

let arr = [1, 2, 3, 4, 5];
let result = rotateAnAarray(arr);
console.log(arr);