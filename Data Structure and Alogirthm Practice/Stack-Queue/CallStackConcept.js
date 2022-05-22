
//Stack overflow when call stack get full
//Browser - Heap - CallStack - JavaScript RUntime Environment
//JavaScript is Single Threaded
//One stack One Thread at a time

//Recursion
function foo(){
    foo();
}
foo();

//Call Stack
//Asynchronous setTimeOut(functionName,1000) //1 sec delay
console.log('1');
setTimeout(() => {
    console.log('2');
},2000)
console.log(3);

console.log('2');
callback(); //callback --> move to CALL STACK

//WEB API:-
//  DOM (document)
//  AJAX (XMLHttpRequest)
//  TimeOut(setTimeOut)


//CALLBACK QUEUE:-
//  onClick, onLoad, onDone
//There is some stuff waiting


//EVENT LOOP

//JavaSCript Engine:-
//  Memory Heap
//  Call Stack
//  JavaScript


//Event LISTENER
element.addEVentListener('click',()=>{
    console.log('click');
})

