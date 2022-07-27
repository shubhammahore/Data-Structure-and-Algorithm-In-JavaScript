//Given an array (or string), the task is to reverse the array/string.
// Input  : arr[] = {1, 2, 3}
// Output : arr[] = {3, 2, 1}

// Input :  arr[] = {4, 5, 1, 2}
// Output : arr[] = {2, 1, 5, 4}

const reverseArray = (arr)=>{
    let start = 0;
    let end = arr.length-1;
    while(start<end){
            let temp = arr[end];
            arr[end] = arr[start];
            arr[start] = temp;
            start++;
            end--;
        }
    // let arr2 = [];
    // for(let i=arr.length-1; i>=0; i--){
    //     arr2.push(arr[i]);
    // }
    return arr;
}
const reverseString = (message)=>{
    let reversedMessage = "";
    for(let i=message.length-1; i>=0; i--){
        reversedMessage = reversedMessage + message[i];
    }
    return reversedMessage;
}
let arr = [1, 2, 3, 7, 0]
console.log(arr);
const result = reverseArray(arr);
console.log(result);
let message = "This is my message";
console.log(message);
const result2 = reverseString(message);
console.log(result2);