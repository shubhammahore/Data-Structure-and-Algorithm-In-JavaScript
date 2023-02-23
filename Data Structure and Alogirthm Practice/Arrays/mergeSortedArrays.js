const mergeSortedArrays2 = (array1,array2) => {
    const mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;j=1;
    //Check input 
    if(array1.length===0){
        return array2;
    }
    if(array2.length===0){
        return array1;
    }
    while(array1Item || array2Item){
        //console.log(array1Item,array2Item);
        if(!array2Item || array1Item < array2Item){
            mergedArray.push(array1Item)
            array1Item = array1[i];
            i++;
        }
        else{
            mergedArray.push(array2Item);
            array2Item = array2[j];       
            j++;
        }
    }
    return mergedArray;
}


function mergeSortedArrays(arr1, arr2){
    //console.log(arr1.sort());
    let arr3 = [];
    for(let i=0;i<arr1.length;i++){
        arr3.push(arr1[i]);
    }
    for(let i=0;i<arr2.length;i++){
        arr3.push(arr2[i]);
    }
    //Sorting
    for(let i=0;i<arr3.length;i++){
        for(let j=i+1;j<arr3.length;j++){
            if(arr3[i]>arr3[j])
                {
                    let temp = arr3[i];
                    arr3[i] = arr3[j];
                    arr3[j] = temp;
                }
        }
    }
    console.log(arr3);
    //[ 0, 3, 4, 4, 6, 30, 31]

    //Removing Duplicates
    let arr4 = [];
    for(let i=0;i<arr3.length;i++){
        let count = 0;
        for(let j=0;j<arr3.length+1;j++){
            if(i!==j){
                if(arr3[i] === arr3[j]){
                    count++;
                }
            }
        }
        if(count==0){
            arr4.push(arr3[i]);
        }
    }
    return arr4;
}



//console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// [0, 3, 4, 6, 30, 31]
console.log(mergeSortedArrays2([0, 3, 4, 31], [4, 6, 30]));
