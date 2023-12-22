const containsCommonItem = (arr1,arr2) => {
    //Brute force approach
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]==arr2[j]){
                return true;
            }
        }
    }
    //Time Complexity : O (n^2) => 5*5 = 25

    //Faster approach use Hashtable a
    let map = {};
    for(let i=0;i<arr1.length;i++){
        if(!map[arr[i]]){
            map[arr1[i]] = true;
        }
    }
    for(let i=0;i<arr2.length;i++){
        if(map[arr2[i]]){
            return true;
        }
    }
    //Time Complexity : O (n1+n2) => 5+5=10
    return false;
}

let arr1 = ['n','a','x','z'];
let arr2 = ['p','q','x'];
const result = containsCommonItem(arr1,arr2);
console.log(result)

