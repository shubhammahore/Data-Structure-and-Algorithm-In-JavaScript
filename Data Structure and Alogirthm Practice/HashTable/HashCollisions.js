let user = {
    age:54,
    name: 'Kylie',
    magic: true,
    scream: function(){
        console.log('ahhhhhh!');
    }
}

console.log(user.age); //O(1)
user.spell = 'abra kadabra'; //O(1)
console.log(user.spell); 
user.scream(); //O(1)