import classes from "./Types.module.css";

const Types = props => {

    let currentTypes = props["types"];

    const generatetTypes = currentTypes.map(currentType => {
        return (
            <span key={currentType["type"]["name"]}>{currentType["type"]["name"]}</span>
        )
    })

    return (
        <div className={classes["types-container"]}>
            <div className={classes["types-wrapper"]}>
             {generatetTypes}
            </div>
        </div>
    )
}

export default Types;