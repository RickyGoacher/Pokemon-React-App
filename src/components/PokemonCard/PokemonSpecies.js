import {useState, useEffect} from "react";
import classes from "./PokemonSpecies.module.css";
import ReadMore from "../../UI/ReadMore";

const PokemonSpecies = (props) => {

    const [getPokemonSpecies, setPokemonSpecies] = useState('');
    const [hasResultReturned, setHasResultReturned] = useState(false);
    const id = props.id;
    let flavorTextEN = [];

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`).then(response => response.json())
        .then(data => {
          console.log(data, "pokemon species");
          setPokemonSpecies(data);
          setHasResultReturned(true);
         
        }).catch(error => {
          console.error(error);
        });
    }, [id]);

    console.log(getPokemonSpecies, 'pokemon species')
    if(hasResultReturned) {
        flavorTextEN = getPokemonSpecies["flavor_text_entries"].filter((item) => {
            return item["language"]["name"] === "en";
        }).map((item) => {
            return (
                {
                    title: item["version"]["name"],
                    content: item["flavor_text"]
                }
            );
        });
    }

    return (
        <div>
            <div className={classes["flavor-text-container"]}>
                {hasResultReturned && 
                    <div className={classes["additional-info"]}>
                        {getPokemonSpecies["base_happiness"] !== "" && <span><span>Base Happiness: </span> <span>{getPokemonSpecies["base_happiness"]}</span></span>}
                        {getPokemonSpecies["capture_rate"] !== "" && <span><span>Capture Rate: </span> <span>{getPokemonSpecies["capture_rate"]}</span></span>}
                        {getPokemonSpecies["hatch_counter"] !== "" && <span><span>Hatch Counter: </span> <span>{getPokemonSpecies["hatch_counter"]}</span></span>}
                    </div>
                }
                {hasResultReturned && <ReadMore content={flavorTextEN}/> }
            </div>
        </div>
    );
}

export default PokemonSpecies;