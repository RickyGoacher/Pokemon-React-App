import {useState, useEffect} from "react";
import classes from "./Search.module.css";
import { Link } from "react-router-dom";

const Search = props => {

    const [getPokemonResult, setPokemonResult] = useState('');

    const [getSearchResult, setSearchResult] = useState([]);

    const [getInputFocus, setInputFocus] = useState(false);

    useEffect(() => {

        fetch(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=1292`).then(response => response.json())
        .then(data => {
          setPokemonResult(data["results"].reduce((r, a) => r.concat(a), []))
          
        }).catch(error => {
          console.error(error)
        });

    },[])

    const getPokemon = (event) => {
        let enteredVal = event.target.value.toLowerCase();
        setSearchResult(getPokemonResult.filter((item) => {
            return item["name"].includes(enteredVal);
        }))
        console.log(getSearchResult, 'gen results')
    };

    const waitForClick = () => {
        setTimeout(() => {
            setInputFocus(false)
        }, 300)
    }

    const searchResult = getSearchResult.map(result => {
        return (
            <div key={result["name"]} className={classes["result-item"]} onClick={waitForClick}>
                <Link to={`/Pokemon-React-App/pokemon/${result["name"]}`}>{result["name"]}</Link>
            </div>
        )
    });

    const onFocus = () => {
        setInputFocus(true)
    }

    return (
        <>
        <div className={getInputFocus ? classes.overlay + " " + classes.active : "" + classes.overlay} onClick={waitForClick}></div>

        <div className={classes["search-container"]}>
            <input type="text" placeholder="Search Pokemon..." onChange={getPokemon} onFocus={onFocus}/>
            {(getSearchResult.length > 0) && <div onClick={waitForClick} className={getInputFocus ? classes["search-results"] + " " + classes.active : "" + classes["search-results"]}>
                {searchResult}
            </div>}
        </div>
        </>
    );
}

export default Search;