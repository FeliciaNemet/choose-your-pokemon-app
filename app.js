// create namespace for the app:
const pokemonStarterApp = {};

// create init function
pokemonStarterApp.init = () => {
     pokemonStarterApp.setUpPokeEventListeners();
     pokemonStarterApp.getPokemon();
};

pokemonStarterApp.setUpPokeEventListeners = () => {
     document.querySelector('#pokemonChoice').addEventListener('change', function () {
     pokemonStarterApp.findPokemon = this.value;

        // console.log(pokemonStarterApp.findPokemon);  
        // ^ this is displaying the value (name of pokemon)

     pokemonStarterApp.getPokemon(pokemonStarterApp.findPokemon);

     });
};

pokemonStarterApp.makeShinyEventListeners = (pokeObject) => {
     
     let count = 0

     document.querySelector(`#shiny`).addEventListener(`click`, function () {

          if (count === 0) {
               const pokeFrontImage = document.querySelector(`#poke-front-image`);
               pokeFrontImage.src = pokeObject[`sprites`][`front_shiny`];

               const pokeBackImage = document.querySelector(`#poke-back-image`);
               pokeBackImage.src = pokeObject[`sprites`][`back_shiny`];

               count = 1;

          } else if (count === 1) {
               const pokeFrontImage = document.querySelector(`#poke-front-image`);
               pokeFrontImage.src = pokeObject[`sprites`][`front_default`];

               const pokeBackImage = document.querySelector(`#poke-back-image`);
               pokeBackImage.src = pokeObject[`sprites`][`back_default`];

               count = 0;
          }
     })
};

pokemonStarterApp.getPokemon = (id) => {
     if (!id) return;

     const url = `https://pokeapi.co/api/v2/pokemon/${id}?limit=150`;

     fetch(url)
          .then((response) => {
               return response.json();
          })
          .then((jsonResult) => {
               const myPokemon = jsonResult;
               // console.log(myPokemon);

               pokemonStarterApp.displayPokers(myPokemon);
               pokemonStarterApp.makeShinyEventListeners(myPokemon);
               pokemonStarterApp.addPokeClasses(id);
          });
};

pokemonStarterApp.displayPokers = (pokeObject) => {
     const pokeBadge = document


     const pokeName = document.querySelector(`#poke-name`);
     pokeName.innerHTML = pokemonStarterApp.findPokemon;

     const pokeNumber = document.querySelector(`#poke-number`);
     pokeNumber.innerHTML = `${pokeObject.id}. `;

     const pokeType = document.querySelector(`#poke-type`);
     pokeType.innerHTML = pokeObject.types[0].type.name;

     const pokeFrontImage = document.querySelector(`#poke-front-image`);
     pokeFrontImage.src = pokeObject[`sprites`][`front_default`];

     const pokeBackImage = document.querySelector(`#poke-back-image`);
     pokeBackImage.src = pokeObject[`sprites`][`back_default`];

     const shiny = document.querySelector(`#shiny`);
     shiny.innerHTML = `toggle shiny ${pokemonStarterApp.findPokemon}`;

     
};

pokemonStarterApp.addPokeClasses = (id) => {
     const pokeName = document.querySelector(`#poke-name`);

     pokeName.removeAttribute('class');
     pokeName.classList.add(`${id}-styles`);
};

// initialize the app
pokemonStarterApp.init();