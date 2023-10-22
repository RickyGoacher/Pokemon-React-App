import {useState, useEffect} from "react";

import PokemonListItem from "./components/PokemonList/PokemonListItem";

function App() {

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon").then(response => response.json())
    .then(data => {
      console.log(data);
      setPokemon(data);
      setHasResultReturned(true);
    }).catch(error => {
      console.error(error)
      setHasResultReturned(false);
    });

  }, []);

  const [getPokemon, setPokemon] = useState();
  const [hasResultReturned, setHasResultReturned] = useState(false);
  let pokemonList;

  console.log(hasResultReturned)

  if(hasResultReturned) {
    pokemonList = getPokemon["results"].map(pokemon => {
      return <PokemonListItem name={pokemon.name} url={pokemon.url} />
    });
  }

  return (
    <div className="App">
      {pokemonList}
    </div>
  );
}

export default App;
