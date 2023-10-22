import classes from "./PokemonListItem.module.css";

const PokemonListItem = (props) => {
    console.log(props)
    return (
        <div className={classes["list-item"]}>
            <a href={props.url}>{props.name}</a>
        </div> 
    )
}

export default PokemonListItem;