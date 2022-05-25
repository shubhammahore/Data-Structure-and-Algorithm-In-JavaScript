function BubbleSort(arr){
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

function BubbleSort2(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] =temp;
            }
        }
    }
    return arr;

}
const numbers = [6,29,9,56,99,3,23,11];
const result = BubbleSort2(numbers);
console.log(result);