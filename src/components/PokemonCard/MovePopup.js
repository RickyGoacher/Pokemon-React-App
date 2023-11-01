import classes from "./MovePopup.module.css";

const MovePopup = props => {

    const currentMove = props["move"];

    return (
        <div className={classes["popup-wrapper"]}>
            <h3>Name: {currentMove["name"]}</h3>
            <span><span>Accuracy:</span> {currentMove["accuracy"]}</span>
            <span><span>Power:</span> {currentMove["power"]}</span>
            <span><span>PP:</span> {currentMove["pp"]}</span>
            <span><span>Damage:</span> {currentMove["damage_class"]["name"]}</span>
            <span><span>Type:</span> {currentMove["type"]["name"]}</span>
        </div>
    )
}

export default MovePopup;