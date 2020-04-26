var pokemonRepository = (function() {
  var pokemonList = [
  {
    name: 'Charmander',
    height: 2.0,
    types: ['fire'],
  },
  {
    name: 'Arcanine',
    height: 6.3,
    types: ['fire'],
  },
  {
    name: 'Diglett',
    height: .08,
    types: ['ground'],
  },
  {
    name: 'Marowak',
    height: 3.03,
    types: ['ground'],
  },
  {
    name: 'Nidoqueen',
    height: 4.03,
    types: ['poison', 'ground'],
  },
  {
    name: 'Butterfree',
    height: 3.07,
    types: ['bug', 'flying'],
  },
  {
    name: 'Pidgeotto',
    height: 3.07,
    types: ['normal', 'flying'],
  },
 ]

  function getAll() {
    return pokemonList;
  }

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  return {
    add: add,
    getAll: getAll
  }
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  document.write(pokemon.name + ', height: ' + pokemon.height)
  if(pokemon.height >= 5) {
    document.write(' - <strong>Wow, that\'s big!</strong> <p></p>')
  }else{
    document.write('<p></p>')
  }
})
