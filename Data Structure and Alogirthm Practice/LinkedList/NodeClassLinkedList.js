//Create a Linked List
// 21--> 50 --> 43
let myOldLinkedList = {
    head:{
            value:21,
            next:{
                    value:50,
                    next:{
                            value:43,
                            next:null
                         }
                 }
         }
}
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList{
    constructor(value){
        this.head = {
            value:value,
            next:null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        //Code here
        //     const newNode = {
        //         value:value,
        //         next:null
        //    };
    const newNode= new Node(value);
       this.tail.next = newNode;
       this.tail = newNode;
       this.length++;
       return this;
            //     this.next ={
            //         value:value,
            //         next:null
            //    };
    //    this.head.next=this.next;
        // this.head.next ={
        //                      value:value,
        //                      next:null
        //                 };
        //this.tail=this.head.next;
        //this.length=this.length+1;
    }
prepend(value){
        //Code here
        //     const newNode = {
        //         value:value,
        //         next:this.head
        //    };
       const newNode= new Node(value);
       this.head = newNode;
       this.length++;
    }
}

const myLinkedList = new LinkedList(10);
//console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(7);
myLinkedList.append(16);
myLinkedList.prepend(1);
console.log(myLinkedList);