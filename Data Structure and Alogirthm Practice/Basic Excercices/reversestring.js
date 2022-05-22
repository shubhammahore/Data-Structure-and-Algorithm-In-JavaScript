//create a function that reverses a string:
//input: 'Hi My name is Shubham' 
//output: 'mahbuhs si eman yM iH'

function reverse(str){
    if(!str || str.length<2 || typeof str!== 'string')
    return 'Not a good string'
    let newstr='';
    for(let i=str.length-1;i>=0;i--){
        newstr=newstr+str[i];
    }
    return newstr;
}

function reverse2(str){
    return str.split('').reverse().join('');
}
const reverse3 = str => str.split('').reverse().join('');
const reverse4 = str => [...str].reverse().join('');
console.log(reverse4('mahbuhs si eman yM iH'))