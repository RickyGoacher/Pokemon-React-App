import classes from "./MovePopup.module.css";

const MovePopup = props => {

    console.log(props, 'move props')

    const currentMove = props["move"];

    return (
        <div className={classes["popup-wrapper"]}>
            <h3>Name: {currentMove["name"]}</h3>
            <span>Accuracy: {currentMove["accuracy"]}</span>
            <span>Power: {currentMove["power"]}</span>
            <span>PP: {currentMove["pp"]}</span>
            <span>Damage: {currentMove["damage_class"]["name"]}</span>
            <span>Type: {currentMove["type"]["name"]}</span>
        </div>
    )
}

export default MovePopup;