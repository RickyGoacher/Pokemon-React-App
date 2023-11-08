import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Search from "./Search";
import waveImage from "../../assets/images/pokeballs.svg";
import pokemonLogo from "../../assets/images/International_Pokémon_logo.svg";

const Header = () => {
    return (
        <header className={classes["header"]}>
            <nav>
            <img className={classes["logo"]} src={pokemonLogo} alt="pokemon"/>
                <ul>
                    <li><Link to={`/Pokemon-React-App/`}>Pokedex</Link></li>
                    <li><Link to={`/Pokemon-React-App/moves`}>Moves</Link></li>
                </ul>
            </nav>
            <Search />
            <img className={classes["background"]} src={waveImage} alt="" />
        </header>
    );
}

export default Header;