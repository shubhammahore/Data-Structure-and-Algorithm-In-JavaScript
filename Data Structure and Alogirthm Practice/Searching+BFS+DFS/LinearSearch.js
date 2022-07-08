//Linear Search
var beast = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');

beast.findIndex(function(item){
    return item === 'Godzilla';
})

beast.find(function(item){
    return item === 'Godzilla';
})

beasts.includes('Godzilla');