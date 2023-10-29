import {useState} from "react";
import MovePopup from "./MovePopup";

import classes from "./Moves.module.css";

const Moves = props => {

    const moveList = props.moves;

    const [getSelectedMove, setSelectedMove] = useState("");

    const fetchSelectedMove = (move) => {
        
        fetch(move).then(response => response.json())
        .then(data => {
            console.log(data, 'move data');
            setSelectedMove(data);
        })
        .catch(error => {
            console.log(error);
        })
        console.log(move)

    }

    const closeModal = () => {
        setSelectedMove("");
    }

    const generateMoves = moveList.map(currentMove => {
        return (
            <span key={currentMove.move.name} onClick={() => {fetchSelectedMove(currentMove.move.url)}}>{currentMove.move.name}</span>
        )
    })

    return (
        <div className={classes["moves-section"]}>
            <h2>Moves</h2>
            <div className={classes["moves-wrapper"]}>
                {generateMoves}
            </div>
            <div className={getSelectedMove !== "" ? classes["moves-popup"] + " " + classes.active : "" + classes["moves-popup"]}>
                <span className={classes.close} onClick={closeModal}>Close</span>
                <div className={classes.overlay}></div>
                {getSelectedMove !== "" && <MovePopup move={getSelectedMove}/>}
            </div>
        </div>
    )
}

export default Moves;