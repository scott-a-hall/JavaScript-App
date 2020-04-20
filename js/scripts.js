alert('Hello World!');

var pokedexRepository = [
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

Object.keys(pokedexRepository).forEach(function(characterList){
  document.write(pokedexRepository[characterList].name, ', (height: ');
  document.write(pokedexRepository[characterList].height, ')');
  if(pokedexRepository[characterList].height >= 5) {
    document.write(' - <strong>Wow, that\'s big!</strong> <p><p/>')
  }else{
    document.write('<p></p>')
  }
});

/*for (var i = 0; i < pokedexRepository.length; i++) {
  document.write(pokedexRepository[i].name, ', (height: ');
  document.write(pokedexRepository[i].height, ')');
  if (pokedexRepository[i].height >= 6.3) {
   document.write(' - <strong>Wow, that\'s big!</strong> <p></p>')
 }else{
   document.write('<p></p>')
 }
}*/
