
// url for Bulbasaur : (https://pokeapi.co/api/v2/pokemon/1/)


// url for Charmander : (https://pokeapi.co/api/v2/pokemon/4/)


// url for Squirtle : (https://pokeapi.co/api/v2/pokemon/7/)

// url for Pikachu : (https://pokeapi.co/api/v2/pokemon/25/)



// fetch('https://pokeapi.co/api/v2/pokemon/')
     // .then(function (response) {
          // return response.json();
     // })
     // .then(function (jsonResult) {
          // console.log(jsonResult);

          // const myPokemon = jsonResult;
          // console.log(myPokemon.results[0].name);
     // });



fetch('https://pokeapi.co/api/v2/pokemon/')
     .then(function (response) {
          return response.json();
     })
     .then(function (jsonResult) {
          console.log(jsonResult);

          const myPokemon = jsonResult;
          console.log(myPokemon.results);
     });





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