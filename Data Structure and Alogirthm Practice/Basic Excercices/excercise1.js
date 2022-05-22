//Given 2 Arrays, create a function that let's user know (true/false) whether these two arrays contain any common items 
//For Example
//const array1 = ['a','b','c','x'];
//const array2 = ['z','y','i'];
//should return false.
//------------------
//const array1 = ['a','b','c','x'];
//const array2 = ['z','y','x'];
//should return true.

//Ask Input and Outputs and size of input
//What is desired Time Complexity/ Space COmplexity 
//Efficient 


//2 parameters -arrays - no size limit
//return true or flase

//O(n^2)

function  CheckIfCOmmonItems(arr1,arr2){
    let count = 0;
    for(let i=0; i<arr1.length; i++){
      for(let j=0; j<arr2.length; j++){
        if(arr1[i]===arr2[j]){
         return true;
        }
      }
    }
    return false;
  }
  
  const array1 = ['a','b','c','x'];
  const array2 = ['z','y','x'];
  //console.log(CheckIfCOmmonItems(array1,array2));

//Big O(a*b); //nesting 2 array
//O(1);

  
    //array2[index] ===obj.properties
    function containsCommonItem2(arr1,arr2){
        //loop through first array and create object  where properties === items in the array
        let map = {};
        for(let i=0; i <arr1.length; i++){
            if(!map[[array1[i]]]){
                const item = array1[i];
                map[item] = true;
            }
        }
        //console.log(map['a']);
        //console.log(map['z']);
        //loop through  second array and check if item in second array exist on created object.
        for(let j = 0; j<arr2.length; j++){
            if(map[array2[j]]){
                return true;
            }
        }
        //console.log(map);
        return false;
    }
    //console.log(containsCommonItem2(array1,array2))
    //Big O (a+b); //adding step //Time Complexity 
    //O()

    //array1 ==> obj{
    //a: true,
    //b: true,
    //c: true,
    //x: true,}
    //}

    function containsCommonItem3(arr1,arr2){
        return arr1.some(item => arr2.includes(item));
    }
    console.log(containsCommonItem3(array1,array2));