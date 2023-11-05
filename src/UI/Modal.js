import classes from "./Modal.module.css";
import { useState, useEffect } from "react";

const Modal = props => {

    const [getSelectedItem, setSelectedItem] = useState("");

    useEffect(() => {
        setSelectedItem(props);
    }, [setSelectedItem, props])

    const CloseModal = () => {
        setSelectedItem("");
    }

    let generateModalContent = [];

    if(typeof getSelectedItem["content"] === "object") {
        generateModalContent = getSelectedItem["content"].map((item) => {
            return (
                <span key={item.title}><span>{item.title}: </span><span>{item.value}</span></span>
            );
        });
    }

    return (
        <div className={getSelectedItem !== "" ? classes["popup"] + " " + classes.active : "" + classes["popup"]}>
            <span className={classes.close} onClick={CloseModal}>Close</span>
            <div className={classes.overlay} onClick={CloseModal}></div>
            {getSelectedItem !== "" &&
                <div className={classes["popup-wrapper"]}>
                    {generateModalContent}
                </div>
            }
        </div>
    );
}

export default Modal;