import {useState, useEffect} from "react";
import classes from "./PokemonListingPage.module.css";
import { useParams, useNavigate } from "react-router-dom";
import PokemonListItem from "../Components/PokemonList/PokemonListItem";

const PokemonListingPage = (props) => {

    const navigate = useNavigate();

    const { num } = useParams(0);

    const [getCurrentPage, setCurrentPage] = useState(`https://pokeapi.co/api/v2/pokemon?offset=${20*num}&limit=20`);

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

    let pageNumber = getCurrentPage.match(/\d+(?=&)/g) / 20;

    console.log(pageNumber, ' page number')

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
            navigate(`/Pokemon-React-App/page/${pageNumber - 1}`);
        }
    }

    function getNext() {
        if(getPokemon["next"] !== null) {
            setCurrentPage(getPokemon["next"]);
            navigate(`/Pokemon-React-App/page/${pageNumber + 1}`);
        }
    }

    return (
       <div className={classes["pokemon-list-container"]}>
       {pokemonList}
       <div className={classes["button-container"]}>
        <button onClick={getPrevious}>Prev<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png" alt=""/></button>
        <button onClick={getNext}><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png" alt=""/> Next</button>
       </div>
       </div> 
    )
}

export default PokemonListingPage;