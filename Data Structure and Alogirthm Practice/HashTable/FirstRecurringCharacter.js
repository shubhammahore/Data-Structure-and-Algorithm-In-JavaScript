//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//Given an array = [2,1,1,2,3,5,1,2,4]:

//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

// function firstRecurringCharacter(input) {
//     for(let n=1;n<input.length-1;n++){
//         for(let i=0; (i+n)<input.length; i++){
//             if(input[i]===input[i+n]){
//                 return input[i];
//             }
//         }
//     }
//     return undefined;
// } //O(n^2)

function firstRecurringCharacter(input) {
    for(let i=0;i<input.length-1;i++){
        for(let j=i+1; j<input.length-1; j++){
            if(input[i]===input[j]){
                return input[i];
            }
        }
    }
    return undefined;
} // Time Complexity - O(n^2) //Space - O(1)
//using HashTable
function firstRecurringCharacter2(input) {
   let map = {};
   for(let i=0; i<input.length;i++){
    //console.log(map[input[i]]);
       if(map[input[i]] !== undefined){
           return input[i];
       }
       else{
           map[input[i]] = i;
       }
       console.log(map);
   }
return undefined;
} //O(n)

//let result = firstRecurringCharacter([2,5,1,2,3,5,1,2,4])
let result2 = firstRecurringCharacter2([2,5,1,2,3,5,1,2,4])
console.log(result2);
//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2