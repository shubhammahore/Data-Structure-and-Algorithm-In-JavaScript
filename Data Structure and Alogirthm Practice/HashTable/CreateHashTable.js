class HashTable {
constructor(size){
    this.data = new Array(size);
}

_hash(key) {
    let hash = 0;
    for (let i =0; i < key.length; i++){
        hash = (hash + key.charCodeAt(i) * i) % this.data.length
    }
    return hash;
}

set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key){
    const address = this._hash(key);
    const currentBucket = this.data[address]
    if (currentBucket) {
      for(let i = 0; i < currentBucket.length; i++){
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1]
        }
      }
    }
    return undefined;
  }
  
//   keys(){
//     const keysArray = [];
//     console.log(this.data.length);
//     for (let i = 0; i < this.data.length; i++){
//       if(this.data[i]){
//         keysArray.push(this.data[i][0][0])
//       }
//     }
//     return keysArray;
//   }

// set(key,value){
//     let hash = this._hash(key)
//     this.data[hash] = value;
// }
// get(key){
//     let hash = this._hash(key)
//     //console.log(hash);
//     return this.data[hash];
// }

keys() {
    if (!this.data.length) {
      return undefined
    }
    let result = []
    // loop through all the elements
    for (let i = 0; i < this.data.length; i++) {
        // if it's not an empty memory cell
        if (this.data[i] && this.data[i].length) {
          // but also loop through all the potential collisions
          if (this.data.length > 1) {
            for (let j = 0; j < this.data[i].length; j++) {
              result.push(this.data[i][j][0])
            }
          } else {
            result.push(this.data[i][0])
          } 
        }
    }
    return result; 
  }

}
  
// const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000)
// console.log(myHashTable.get('grapes'));
// //console.log(myHashTable.data['grapes']);
// myHashTable.set('apples', 9)
// console.log(myHashTable.get('apples'))
const myHashTable = new HashTable(50);
myHashTable.set('grapes', 10000)
myHashTable.set('grapes', 10000)
myHashTable.get('grapes')
myHashTable.set('apples', 9)
myHashTable.get('apples')
console.log(myHashTable.keys())