//0, 1, 1, 2, 3, 5, 13, 21, 34, 55, 89, 144.....
let calculations = 0;
const fibonacci = (n) => {
    calculations++;
    if(n<2){
        return n;
    }
    return fibonacci(n-1)+fibonacci(n-2);
}

calculations = 0;
function fibonacciWithDp () {
    let cache = {};
    return function fib(n){
        if(n in cache){
            return cache[n];
        }
        else{
            calculations++;
            if(n<2){
                return n;
            }
            else{
                cache[n] =  fib(n-1)+fib(n-2);
                return cache[n];
            }
        }
        
        
    }
}

const fasterFib = fibonacciWithDp();
let result = fibonacci(12)
console.log('DP',fasterFib(10));
console.log('we did ' + calculations+ ' calculations');
//O(2^n)