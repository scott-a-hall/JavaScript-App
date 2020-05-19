var pokemonRepository = (function () {
  var pokemonList = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/';
  var $modalContainer = document.querySelector('#modal-container');

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

//load API list
function loadList() {
  return fetch(apiUrl).then(function (response) {
    return response.json();
  }).then(function (json) {
    json.results.forEach(function (item) {
      var pokemon = {
        name: item.name,
        detailsUrl: item.url,
      };
      add(pokemon);
    });
  }).catch(function (e) {
    console.error(e);
  });
}

function loadDetails(item) {
  var url = item.detailsUrl;
  return fetch(url).then(function (response) {
    return response.json();
  }).then(function (details) {
    //add details to item
    item.imageUrl = details.sprites.front_default;
    item.height = details.height;
    item.types = [];
    for (var i = 0; i < details.types.length; i++) {
      item.types.push(' ' + details.types[i].type.name);
    }
    }).catch(function (e) {
    console.error(e);
  })
};

function showDetails(item) {
  loadDetails(item).then(function () {
    showModal(item);
  });
};

// Create modal
function showModal(item) {
  $modalContainer.innerHTML = '';
  var modal = document.createElement('div');
  modal.classList.add('modal');

  // Add modal content
  var closeButtonElement = document.createElement('button');
  closeButtonElement.classList.add('modal-close');
  closeButtonElement.innerText = 'Close';
  closeButtonElement.addEventListener('click', hideModal);

  // Add character name to modal
  var nameElement = document.createElement('h1');
  nameElement.innerText = item.name;

  // Add character height
  var heightElement = document.createElement('p');
  heightElement.innerText = 'Height: ' + item.height + ' m';

  // Add character type(s)
  var typeElement = document.createElement('p');
  typeElement.innerText = 'Type: ' + item.types;

  // Add character image
  var imageElement = document.createElement('img');
  imageElement.classList.add('modal-image');
  imageElement.setAttribute('src', item.imageUrl);

  modal.appendChild(closeButtonElement);
  modal.appendChild(nameElement);
  modal.appendChild(heightElement);
  modal.appendChild(typeElement);
  modal.appendChild(imageElement);
  $modalContainer.appendChild(modal);

  $modalContainer.classList.add('is-visible');
};

function hideModal() {
  $modalContainer.classList.remove('is-visible');
};

window.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});

$modalContainer.addEventListener('click', (e) => {
  var target = e.target;
  if (target === $modalContainer) {
    hideModal();
  }
});

return {
  add: add,
  getAll: getAll,
  addListItem: addListItem,
  loadList: loadList,
  loadDetails: loadDetails
}
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
