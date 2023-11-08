import classes from "./Footer.module.css";
import pokeballBG from "../../assets/images/pokeballs.svg";


const Footer = () => {
    return (
        <footer className={classes["footer"]}>
            <img src={pokeballBG} alt=""/>
        </footer>
    )
}

export default Footer;