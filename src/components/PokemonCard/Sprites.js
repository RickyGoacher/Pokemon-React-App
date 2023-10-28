import classes from "./Sprites.module.css";

const Sprites = props => {

    const spriteList = Object.values(props.sprites);

    const generateSprites = spriteList.map(sprite => {
        return (
            <img key={Math.random()} src={sprite} alt="" />
        )
    });


    return (
        <div className={classes["sprite-section"]}>
            {generateSprites}
        </div>
    )
}

export default Sprites;