class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class Queue {
    constructor(){
      this.first = null;
      this.last = null;
      this.length = 0;
    }
    peek() {
        this.first;
    }
    enqueue(value){
        const newNode = new Node(value);
        if(this.length===0){
            this.first = newNode;
            this.last = newNode;
        }
        else{
            //const holdingPointer = this.last;
            this.last.next = newNode;
            this.last = newNode;
        }
        
        this.length++;
        return this;
    }
    dequeue(){
        if(!this.first || this.length===0){
            return null;
        }
        if(this.first === this.last){
            this.last = null;
        }

        const holdingPointer = this.first;
        this.first = holdingPointer.next;
        this.length--;
        return this;
    }
    //isEmpty;
  }
  
  const myQueue = new Queue();
  console.log(myQueue.peek());
  console.log(myQueue.enqueue('google'));
  console.log(myQueue.enqueue('udemy'));
  console.log(myQueue.enqueue('discord'));
  console.log(myQueue.dequeue());
  //Joy
  //Matt
  //Pavel
  //Samir
  
  