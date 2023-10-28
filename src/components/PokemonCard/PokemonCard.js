import classes from "./PokemonCard.module.css";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import HeroImage from "./HeroImage";
import Abilities from "./Abilities";
import Sprites from "./Sprites";
import Moves from "./Moves";
import Stats from "./Stats";
import Types from "./Types";

const PokemonCard = (props) => {

    const { id } = useParams();
    const [getPokemon, setPokemon] = useState();
    const [hasResultReturned, setHasResultReturned] = useState(false);
    let currentPokemon;
    let monSprites = [];
    let artwork = "";
    let artworkShiny = "";
    let abilitiesList = [];
    let monMoves = [];
    let monStats = [];
    let monTypes = [];

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(response => response.json())
        .then(data => {
          console.log(data, "pokemon api");
          setPokemon(data);
          setHasResultReturned(true);
        }).catch(error => {
          console.error(error)
          setHasResultReturned(false);
        });
    
      }, [id]);

      if(hasResultReturned) {
        currentPokemon = getPokemon;
        monSprites = currentPokemon["sprites"];
    
        artwork = currentPokemon["sprites"]["other"]["official-artwork"]
        artworkShiny = currentPokemon["sprites"]["other"]["official-artwork"]["front_shiny"]
        abilitiesList = currentPokemon["abilities"];
        monMoves = currentPokemon["moves"];
        monStats = currentPokemon["stats"];
        monTypes = currentPokemon["types"];
        console.log(currentPokemon, 'current mon')
      }

    return (
        <div>
            <div className={classes["hero-section"]}>
                <div className={classes["artwork-section"]}>
                    
                    <HeroImage images={artwork} />
                </div>
                <div className={classes["text-section"]}>
                    <div className={classes["main-title"]}>
                        <h1>{id}</h1>
                        <Types types={monTypes}/>
                    </div>
                    <Abilities abilities={abilitiesList} />
                    <Stats stats={monStats} />
                </div>
            </div>
        
            <Sprites sprites={monSprites} />
            <Moves moves={monMoves} />
            <img src={artworkShiny} alt=""/>
        </div>
    )
}

export default PokemonCard;