function addTo80(n){
    console.log('long time');
    return n+80;
}

// addTo80(5);
// addTo80(15);
// addTo80(34);


function memoizedAddTo80(){
    let cache = {};
    return function(n){
        if(n in cache){
            return cache[n];
        }
        else{
            console.log('long time');
            cache[n] = n+80;
            return cache[n];
        }
    }
}

const memoized = memoizedAddTo80();
console.log('1',memoized(5));
console.log('2',memoized(5));