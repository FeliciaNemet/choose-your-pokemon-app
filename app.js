// url for Bulbasaur : (https://pokeapi.co/api/v2/pokemon/1/)
// url for Charmander : (https://pokeapi.co/api/v2/pokemon/4/)
// url for Squirtle : (https://pokeapi.co/api/v2/pokemon/7/)
// url for Pikachu : (https://pokeapi.co/api/v2/pokemon/25/)

// create namespace for the app:
const pokemonStarterApp = {};

// create init function
pokemonStarterApp.init = () => {
     // pokemonStarterApp.getPokemon();
     pokemonStarterApp.setUpEventListeners();

};

pokemonStarterApp.setUpEventListeners = () => {
     document.querySelector('#pokemonChoice').addEventListener('change', function () {

     
          pokemonStarterApp.findPokemon = this.value;

          console.log(pokemonStarterApp.findPokemon);  // this is displaying the value (name of pokemon)
     });
pokemonStarterApp.setUpEventListeners = () => {
     document.querySelector('#pokemonChoice').addEventListener('change', function() {
          pokemonStarterApp.findPokemon = this.value;
          console.log(pokemonStarterApp.findPokemon);
          pokemonStarterApp.getPokemon(pokemonStarterApp.findPokemon);

     });
};

pokemonStarterApp.getPokemon = (id) => {
     // store the api URL as a property on the app
     const url = `https://pokeapi.co/api/v2/pokemon/${id}?limit=30`;
     url.search = new URLSearchParams({
          q: 'query'
     });


     fetch(url)
          .then( (response) => {
               return response.json();
          })
          .then( (jsonResult) => {

          console.log(jsonResult);
               const myPokemon = jsonResult;
               console.log(myPokemon);

               // // console.log(myPokemon.results);
               pokemonStarterApp.displayPokemon(jsonResult.pokeObject);
               
          });
}

// display the pokemon on the page
pokemonStarterApp.displayPokemon = (pokeDetails) => {
     const pokeBox = document.querySelector(`#pokeBox`);
     pokeBox.innerHTML = ``;

          pokeDetails.forEach( (pokeObject) => {
               const pokeCube = document.createElement(`div`);
               pokeCube.classList.add(`pokeContainer`)

               const pokeName = document.createElement(`h3`);
               pokeName.innerText = jsonResult.pokeName;

               const pokeType = document.createElement(`p`);
               pokeType.innerText = jsonResult.types;

               const pokeImage = document.createElement(`img`);
               pokeImage.src = pokeObject[`sprites`][`front_default`];
               console.log(pokeObject[`sprites`][`front_default`]);
               pokeImage.alt = pokeObject.name;

               pokeCube.appendChild(pokeName);
               pokeCube.appendChild(pokeType);
               pokeImage.appendChild(pokeImage);

               pokeBox.appendChild(pokeCube);

          });
};

     // jsonData.forEach((imageItem) => {
     //      // create new li elements for each pokemon
     //      const liElement = document.createElement('li');
          
     //      const imageElement = document.createElement('img');
     //      imageElement.src = imageItem.sprites[`front_default`].url;
     //      imageElement.alt = imageItem.name;

          
     // })




// initialize the app
pokemonStarterApp.init();

     const pokeNumber = document.querySelector(`#poke-type`);
     pokeNumber.innerHTML = pokeObject.id;

     const pokeFrontImage = document.querySelector(`#poke-front-image`);
     pokeFrontImage.src = pokeObject[`sprites`][`front_default`];

     

     
               // name: data.name,
               // id: data.id,
               // image: data.sprites['front_default']


};