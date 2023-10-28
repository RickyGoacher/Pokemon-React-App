import {useState, useEffect} from "react";
import classes from "./PokemonListingPage.module.css";
import { useParams } from "react-router-dom";
import PokemonListItem from "../Components/PokemonList/PokemonListItem";

const PokemonListingPage = (props) => {

    const { num } = useParams();

    const [getCurrentPage, setCurrentPage] = useState("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");

    useEffect(() => {

        let getCurrentPageNum = /\d+(?=&)/g;
    
        if(num) {
            setCurrentPage(getCurrentPage.replace(getCurrentPageNum, (20*num)))
        }

        fetch(getCurrentPage).then(response => response.json())
        .then(data => {
          console.log(data, "pokemon api");
          setPokemon(data);
          setHasResultReturned(true);
        }).catch(error => {
          console.error(error)
          setHasResultReturned(false);
        });
    
    }, [getCurrentPage, num]);

    const [getPokemon, setPokemon] = useState();
    const [hasResultReturned, setHasResultReturned] = useState(false);
    let pokemonList;
    
    console.log(hasResultReturned)
    
    if(hasResultReturned) {
        pokemonList = getPokemon["results"].map(pokemon => {
            return <PokemonListItem name={pokemon.name} url={pokemon.url} />
        });
    }

    function getPrevious() {
        if(getPokemon["previous"] !== null) {
            setCurrentPage(getPokemon["previous"]);
        }
    }

    function getNext() {
        if(getPokemon["next"] !== null) {
            setCurrentPage(getPokemon["next"]);
        }
    }

    return (
       <div className={classes["pokemon-list-container"]}>
       {pokemonList}
       <div>
        <button onClick={getPrevious}>Prev</button>
        <button onClick={getNext}>Next</button>
       </div>
       </div> 
    )
}

export default PokemonListingPage;