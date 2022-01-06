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
     document.querySelector('#pokemonChoice').addEventListener('change', function() {
          pokemonStarterApp.findPokemon = this.value;
          console.log(pokemonStarterApp.findPokemon);
          pokemonStarterApp.getPokemon(pokemonStarterApp.findPokemon);

     });
}


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



     

     
               // name: data.name,
               // id: data.id,
               // image: data.sprites['front_default']


// have the api call happen inside an event handler 

// Pseudo code:

// create a namespace object for our app
// create an init method
//   - call the init method on page load

// create a selection input for the user to select from 4 different Pokemon
//   -(representing 4 types: fire, water, grass, electricity)
//        - store the users selection in a variable
//        - use the variable to make an api call
//             - display the selected Pokemon on the page with some stats and an image
//             - based on the users input we will alter the css on page to reflect the type 
//               of Pokemon they selected (fire, water, grass, electricity)
//        - clear the contents after each call