//Linear Search
var beast = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beast.indexOf('Godzilla');

beast.findIndex(function(item){
    return item === 'Godzilla';
})

beast.find(function(item){
    return item === 'Godzilla';
})

beast.includes('Godzilla');
console.log(beast)