import {useState, useEffect} from "react";
import classes from "./PokemonSpecies.module.css";

const PokemonSpecies = (props) => {

    const [getPokemonSpecies, setPokemonSpecies] = useState('');
    const [hasResultReturned, setHasResultReturned] = useState(false);
    const [getNumLimit, setNumLimit] = useState(1);

    const id = props.id;

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

    let generateFlavourTextSection = [];

    if(hasResultReturned) {
        generateFlavourTextSection = getPokemonSpecies["flavor_text_entries"].map((entry, i) => {
            if(entry["language"]["name"] === "en" && i <= getNumLimit) {
                return (
                    <div key={entry["version"]["name"]} className={classes["flavor-text-wrapper"]}>
                        <div className={classes["version"]}>
                            {entry["version"]["name"]}
                        </div>
                        <div className={classes["text"]}>
                            {entry["flavor_text"]}
                        </div>
                    </div>
                )
            } else {
                return '';
            }
        })
    }

    const toggleViewMore = (event) => {
        if(event.target.innerText === "View More") {
            setNumLimit(getPokemonSpecies["flavor_text_entries"].length);
        } else {
            setNumLimit(1);
        }
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
                {generateFlavourTextSection}
                <button className={classes["view-more-button"]} onClick={toggleViewMore}>{getNumLimit === 1 ? "View More" : "View Less"}</button>
            </div>
        </div>
    );
}

export default PokemonSpecies;