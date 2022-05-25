
function SelectionSort(arr){
    //[6,29,9,56,99,3,23,11]
    for(let i=0; i<arr.length; i++){
        let smallestItem = arr[i];
        let smallestIndex=i;
        for(let j=i+1; j<arr.length;j++){
            if(smallestItem>arr[j]){
                smallestItem = arr[j]
                smallestIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[smallestIndex];
        arr[smallestIndex] = temp;
    }
    return arr;
}
const numbers = [6,29,9,56,99,3,23,11];
const result = SelectionSort(numbers);
console.log(result);

function SelectionSort2(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]>arr[j]){
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] =temp;
            }
        }
    }
    return arr;
}
