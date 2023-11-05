import {useState} from "react";
import Modal from "../../UI/Modal";
import classes from "./Moves.module.css";

const Moves = props => {

    const moveList = props.moves;

    const [getSelectedMove, setSelectedMove] = useState("");

    let ModalContent = "";

    const fetchSelectedMove = (move) => {
        
        fetch(move).then(response => response.json())
        .then(data => {
            setSelectedMove(data);
        })
        .catch(error => {
            console.log(error);
        })
    }

    const generateMoves = moveList.map(currentMove => {
        return (
            <span key={currentMove.move.name} onClick={() => {fetchSelectedMove(currentMove.move.url)}}>{currentMove.move.name}</span>
        )
    });

    if(getSelectedMove !== "") {
        ModalContent = [
            {"title": "Name", "value": getSelectedMove["name"]},
            {"title": "Accuracy", "value": getSelectedMove["accuracy"]},
            {"title": "Power", "value": getSelectedMove["power"]},
            {"title": "PP", "value": getSelectedMove["pp"]},
            {"title": "Priority", "value": getSelectedMove["priority"]},
            {"title": "Target", "value": getSelectedMove["target"]["name"]}
        ];
    }

    return (
        <div className={classes["moves-section"]}>
            <h2>Moves</h2>
            <div className={classes["moves-wrapper"]}>
                {generateMoves}
            </div>
            {getSelectedMove !== "" && <Modal content={ModalContent} />}
        </div>
    );
}

export default Moves;