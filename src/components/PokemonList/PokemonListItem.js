import classes from "./PokemonListItem.module.css";
import { Link } from "react-router-dom";

const PokemonListItem = (props) => {

    let pokemonNumberMatch = /(?<=pokemon\/)\d+/g;

    let pokemonNumber = props.url.match(pokemonNumberMatch)

    return (
        <div key={props.name} className={classes["list-item"]}>
            <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`} alt={props.name} />
            <Link to={`/pokemon/${props.name}`}>{props.name}</Link>
        </div> 
    )
}

export default PokemonListItem;