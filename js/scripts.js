var pokemonRepository = (function () {
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

function addListItem(pokemon) {
  var pokeList = document.querySelector('.pokemon-list');
  var listItem = document.createElement('li');

  //add button
  var button = document.createElement('button');
  button.innerText = (pokemon.name);
  button.classList.add('button');
  listItem.appendChild(button);
  pokeList.appendChild(listItem);

  //add Event Listener
  button.addEventListener('click', function() {
    showDetails(pokemon)
  });
}

function showDetails (pokemon) {
  console.log(pokemon);
}

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem
}
})();

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
})
