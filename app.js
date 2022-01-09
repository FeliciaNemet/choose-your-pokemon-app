// Create a namespace for our app:
const pokemonStarterApp = {};


// An initializer function. The first thing that will be called and will get all the other parts of our app up and running.
pokemonStarterApp.init = () => {
     pokemonStarterApp.setUpPokeEventListeners();
     pokemonStarterApp.getPokemon();
};


//  A function to set up a change event listener on our select drop-down.When the change event fires, it will call the pokemonStarterApp.findPokemon function with the value of the selected option as an argument. 
pokemonStarterApp.setUpPokeEventListeners = () => {
     document.querySelector('#pokemonChoice').addEventListener('change', function () {
          
          pokemonStarterApp.findPokemon = this.value;
          pokemonStarterApp.getPokemon(pokemonStarterApp.findPokemon);
          
     });
};

// A function that lets the user toggle between the default and shiny images.
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


// A function for our API call, this will go get the data from pokeapi.co .
pokemonStarterApp.getPokemon = (id) => {
     if (!id) return;

     const url = `https://pokeapi.co/api/v2/pokemon/${id}?limit=150`;

     fetch(url)
          .then((response) => {
               return response.json();
          })
          .then((jsonResult) => {
               const myPokemon = jsonResult;
               console.log(myPokemon);

               pokemonStarterApp.displayPokers(myPokemon);
               pokemonStarterApp.makeShinyEventListeners(myPokemon);
               pokemonStarterApp.addPokeClasses(id);
          });
};


// A function that uses the API result to create new elements and put them on the page based on the selected value.
pokemonStarterApp.displayPokers = (pokeObject) => {

     const pokeBadge = document.querySelector(`#poke-badge`);
     pokeBadge.innerHTML = `<img src="./assets/${pokeObject.types[0].type.name}.png" alt="${pokeObject.types[0].type.name} badge" >`;

     const pokeName = document.querySelector(`#poke-name`);
     pokeName.innerHTML = pokemonStarterApp.findPokemon;

     const pokeNumber = document.querySelector(`#poke-number`);
     pokeNumber.innerHTML = `${pokeObject.id}. `;

     const pokeType = document.querySelector(`#poke-type`);
     pokeType.innerHTML = pokeObject.types[0].type.name;

     const pokeFrontImage = document.querySelector(`#poke-front-image`);
     pokeFrontImage.src = pokeObject[`sprites`][`front_default`];
     pokeFrontImage.alt = `${pokemonStarterApp.findPokemon} front`;

     const pokeBackImage = document.querySelector(`#poke-back-image`);
     pokeBackImage.src = pokeObject[`sprites`][`back_default`];
     pokeBackImage.alt = `${pokemonStarterApp.findPokemon} back`;

     const shiny = document.querySelector(`#shiny`);
     shiny.innerHTML = `toggle shiny ${pokemonStarterApp.findPokemon}`;
     
};


// A function that chnages the styling of the chosen pokemon's name based on the selected value.
pokemonStarterApp.addPokeClasses = (id) => {

     const pokeName = document.querySelector(`#poke-name`);

     pokeName.removeAttribute('class');
     pokeName.classList.add(`${id}-styles`);

};

// Call the init function to start off our app!
pokemonStarterApp.init();