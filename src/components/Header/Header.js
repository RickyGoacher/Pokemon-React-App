import classes from "./Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={classes["header"]}>
            <nav>
                <ul>
                    <li><Link to={`/`}>Pokedex</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;