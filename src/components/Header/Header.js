import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import Search from "./Search";

const Header = () => {
    return (
        <header className={classes["header"]}>
            <nav>
                <ul>
                    <li><Link to={`/Pokemon-React-App/`}>Pokedex</Link></li>
                </ul>
            </nav>
            <Search />
        </header>
    )
}

export default Header;