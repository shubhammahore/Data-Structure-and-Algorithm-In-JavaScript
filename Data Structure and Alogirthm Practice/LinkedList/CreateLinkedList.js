//Create a Linked List
// 21--> 50 --> 43
let myOldLinkedList = {
  head: {
    value: 21,
    next: {
      value: 50,
      next: {
        value: 43,
        next: null,
      },
    },
  },
};

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    //Code here
    const newNode = {
      value: value,
      next: null,
    };
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
  prepend(value) {
    //Code here
    const newNode = {
      value: value,
      next: this.head,
    };
    this.head = newNode;
    this.length++;
  }

  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  traverseToIndex(index) {
    //check params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  // traverseToEnd(){

  //     let counter = 0;
  //     let currentNode = this.head;
  //     while(currentNode !== null && currentNode.next !==null){
  //         currentNode = currentNode.next;
  //     }
  //     return currentNode;
  // }
  insert(index, value) {
    //check params
    if (index >= this.length) {
      return this.append(value);
    }
    const newNode = {
      value: value,
      next: null,
    };
    //Logic
    const leader = this.traverseToIndex(index - 1);
    //console.log(leader);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;

    //    let prev = this.head;
    //     for(let i=0;i<index-1;i++){
    //         prev = prev.next;
    //     }
    //     let aft = prev.next;
    //     newNode.next = aft;
    //     prev.next = newNode;
  }

  remove() {
    const temp = this.head.next;
    delete this.head;
    this.head = temp;
    this.length--;
  }
  remove(index) {
    //Logic
    const leader = this.traverseToIndex(index - 1);
    //console.log(leader);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }
}

const myLinkedList = new LinkedList(10);
//console.log(myLinkedList);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(2, 99);
myLinkedList.insert(20, 88);
console.log(myLinkedList.printList());
// myLinkedList.remove();
//console.log(myLinkedList);
myLinkedList.remove(2);
console.log(myLinkedList.printList());
//console.log(myLinkedList);
