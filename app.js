// url for Bulbasaur : (https://pokeapi.co/api/v2/pokemon/1/)
// url for Charmander : (https://pokeapi.co/api/v2/pokemon/4/)
// url for Squirtle : (https://pokeapi.co/api/v2/pokemon/7/)
// url for Pikachu : (https://pokeapi.co/api/v2/pokemon/25/)

// create namespace for the app:
const pokemonStarterApp = {};

// create init function
pokemonStarterApp.init = () => {
     pokemonStarterApp.setUpEventListeners();
     pokemonStarterApp.getPokemon();
};

pokemonStarterApp.setUpEventListeners = () => {
     document.querySelector('#pokemonChoice').addEventListener('change', function () {
          pokemonStarterApp.findPokemon = this.value;

          console.log(pokemonStarterApp.findPokemon);  // this is displaying the value (name of pokemon)

          pokemonStarterApp.getPokemon(pokemonStarterApp.findPokemon);

     });
}


pokemonStarterApp.getPokemon = (id) => {
     // store the api URL as a property on the app
     const url = `https://pokeapi.co/api/v2/pokemon/${id}?limit=30`;
     // url.search = new URLSearchParams({
     //      q: 'query'
     // });


     fetch(url)
          .then((response) => {
               return response.json();
          })
          .then((jsonResult) => {
               const myPokemon = jsonResult;
               console.log(myPokemon);

               // need to call the display function in here
               // eg: artApp.displayPieces(data.artObjects);

               pokemonStarterApp.displayPokers(myPokemon);
               
          });
}

// display the pokemon on the page
pokemonStarterApp.displayPokemon = (pokeObject) => {

               const pokeName = document.querySelector(`#poke-name`);
               pokeName.innerHTML = pokemonStarterApp.findPokemon;

               const pokeNumber = document.querySelector(`#poke-type`);
               pokeNumber.innerHTML = pokeObject.id;

               const pokeFrontImage = document.querySelector(`#poke-front-image`);
               pokeFrontImage.src = pokeObject[`sprites`][`front_default`];

               const pokeBackImage = document.querySelector(`#poke-back-image`);
               pokeBackImage.src = pokeObject[`sprites`][`back_default`];

};

// initialize the app
pokemonStarterApp.init();

