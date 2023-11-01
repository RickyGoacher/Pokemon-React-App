import classes from "./404.module.css";

const FourZeroFour = () => {
    return (
        <div className={classes["four-zero-four-container"]}>
            <h1>404 Not Found</h1>
            <div className={classes["image-container"]}>
            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/54.png" alt=""/>
            </div>
        </div>
    )
}

export default FourZeroFour;