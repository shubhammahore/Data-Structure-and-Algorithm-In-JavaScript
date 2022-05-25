//Given a number N return the index value of the Fibonacci sequenc, where the sequence is:
//0, 1, 1, 2, 3, 5, 8 ,13, 21, 34, 55, 89, 144
//The pattern of the sequence is theat each value is the sum of the 2 previous values, that means that for N=5 --> 2+3

function fibonacciIterative(n){
    //code here:
    
    let a = 0;
    let b = 1;

    for(let i = 0; i<n; i++){
        console.log(a);
        c = a+b;
        a = b;
        b = c;
    }
}

//fibonacciIterative(10);

function fibonacciRecursion(n){
    //code here:
    
    if(n===2){
        return n;
    }
    //console.log(fibonacciIterative(n-1));
    console.log(n)
    return (fibonacciIterative(n-1))
}
fibonacciRecursion(10);
//console.log(res);
// res = a+b
// 0= 0+0
// 1= 0+1 res 
// 2= 1+1 res
// 3= 1+2
// 5= 2+3
// 8= 3+5

