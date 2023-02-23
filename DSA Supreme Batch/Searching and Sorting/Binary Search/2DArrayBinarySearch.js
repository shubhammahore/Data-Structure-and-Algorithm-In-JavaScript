//2DArrayBinarySearch
//arr[row][col]
//i,j -> column*i+j
//rowIndex = mid/column;
//colIndex = mid%column;
const twoDArrayBinarySearch = (arr,target,row,col)=> {
    let start = 0;
    let totalSize = row*col;
    let end = totalSize -1;
    let mid = Math.floor(start + (end-start)/2);
    while(start<=end){
        let rowIndex = Math.floor(mid/col);
        let colIndex = Math.floor(mid%col);
        let element = arr[rowIndex][colIndex];
        if(element === target){
            console.log("rowIndex:"+rowIndex+"  "+"colIndex:"+colIndex);
            return true;
        }
        if(element > target){
            //search left
            end = mid-1;
        }
        else{
            start = mid+1;
        }
        mid = Math.floor(start + (end-start)/2)
    }
    return -1;
}

let arr = [[1,2,3],[4,5,6],[7,8,9]]
let row = 3;
let col = 3;
let target = 12;
console.log(arr);
const result = twoDArrayBinarySearch(arr,target,row,col);
console.log(result);