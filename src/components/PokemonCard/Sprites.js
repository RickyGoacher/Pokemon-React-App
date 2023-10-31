import classes from "./Sprites.module.css";

const Sprites = props => {

    const spriteList = Object.values(props.sprites);

    const generateSprites = spriteList.map(sprite => {
        console.log(typeof sprite === 'object')
        if (typeof sprite !== 'object') {
            return (
                <img key={Math.random()} src={sprite} alt="" />
            )
        } else {
            return ''
        }
    });


    return (
        <div className={classes["sprite-section"]}>
            {generateSprites}
        </div>
    )
}

export default Sprites;