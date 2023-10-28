import classes from "./Moves.module.css";

const Moves = props => {

    const moveList = props.moves;

    const generateMoves = moveList.map(currentMove => {
        return (
            <span key={currentMove.move.name}>{currentMove.move.name}</span>
        )
    })

    return (
        <div className={classes["moves-section"]}>
            <h2>Moves</h2>
            <div className={classes["moves-wrapper"]}>
                {generateMoves}
            </div>
        </div>
    )
}

export default Moves;