import classes from "./PokemonListItem.module.css";
import { Link } from "react-router-dom";

const PokemonListItem = (props) => {

    let pokemonNumberMatch = /(?<=pokemon\/)\d+/g;

    let pokemonNumber = props.url.match(pokemonNumberMatch)

    return (
        <div key={props.name} className={classes["list-item"]}>
            <Link to={`${props["baseUrl"]}${props.name}`}>
                <div className={classes["image-wrapper"]}>
                    {pokemonNumber !== null && <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`} alt={props.name} />}
                </div>
                <div className={classes["pokemon-divider"]}></div>
                <div className={classes["text-wrapper"]}>
                    <span>{props.name}</span>
                </div>
            </Link>
        </div> 
    );
}

export default PokemonListItem;