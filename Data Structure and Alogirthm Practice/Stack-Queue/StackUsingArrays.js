class Stack{
    constructor(){
        this.array = [];
    }
    peek(){
        return this.array[this.array.length-1];
    }
    push(value){
        this.array.push(value)
        return this;
    }
    pop(){
        return this.array.pop();
    }
    //isEmpty
}


const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
console.log(myStack.pop());
// console.log(myStack.pop());
// console.log(myStack.pop());
console.log(myStack);
console.log(myStack.peek());