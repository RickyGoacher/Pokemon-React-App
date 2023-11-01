import classes from "./MoveCard.module.css";
import {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const MoveCard = () => {

    const { id } = useParams();
    const [hasResultReturned, setHasResultReturned] = useState(false);
    const [getMove, setMove] = useState();

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/move/${id}`).then(response => response.json())
        .then(data => {
          console.log(data, "move api");
          setMove(data);
          setHasResultReturned(true);
        }).catch(error => {
          console.error(error)
          setHasResultReturned(false);
        });
    
      }, [id]);

      let LearnedByPokemon = [];
      let FlavorText = [];
      let pokemonNumberMatch = /(?<=pokemon\/)\d+/g;

      if(hasResultReturned) {
        LearnedByPokemon = getMove["learned_by_pokemon"].map(pokemon => {
            let pokemonNumber = pokemon.url.match(pokemonNumberMatch)
            return (
                <div className={classes["pokemon"]} key={pokemon["name"]}>
                    <Link to={`/Pokemon-React-App/pokemon/${pokemon["name"]}`}>
                        <div className={classes["image-wrapper"]}>
                            {pokemonNumber !== null && <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`} alt={pokemon.name} />}
                        </div>
                        <div>
                            <span>{pokemon["name"]}</span>
                        </div>
                    </Link>
                </div>
            )
          })
      }

      if(hasResultReturned) {
        console.log(getMove["flavor_text_entries"], 'test')
        FlavorText = getMove["flavor_text_entries"].map(text => {
            if(text["language"]["name"] === "en") {
                return (
                    <span key={text["version_group"]["name"]}>
                        <span>{text["flavor_text"]}</span>
                        <span>{text["version_group"]["name"]}</span>
                    </span>
                )
            } else {
                return "";
            }
          })
      }

    return (
        <div className={classes["move-container"]}>
            <h1>{hasResultReturned && getMove["name"]}</h1>
            <div className={classes["move-wrapper"]}>
                <span><span>Accuracy: </span><span>{hasResultReturned && getMove["accuracy"]}</span></span>
                <span><span>Damage Class: </span><span>{hasResultReturned && getMove["damage_class"]["name"]}</span></span>
                <span><span>Power: </span><span>{hasResultReturned && getMove["power"]}</span></span>
                <span><span>PP: </span><span>{hasResultReturned && getMove["pp"]}</span></span>
                <span><span>Priority: </span><span>{hasResultReturned && getMove["priority"]}</span></span>
                <span><span>Type: </span><span>{hasResultReturned && getMove["type"]["name"]}</span></span>
                <span><span>Target: </span><span>{hasResultReturned && getMove["target"]["name"]}</span></span>
            </div>
            <div className={classes["pokemon-container"]}>
                <h2>Pokemon that can learn {hasResultReturned && getMove["name"]}</h2>
                <div className={classes["pokemon-wrapper"]}>
                    {hasResultReturned && LearnedByPokemon}
                </div>
            </div>
            <div className={classes["move-wrapper"]}>
                {hasResultReturned && FlavorText}
            </div>
        </div>
    )

}

export default MoveCard;