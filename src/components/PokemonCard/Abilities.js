import classes from "./Abilities.module.css";
import { useState } from "react";
import Modal from "../../UI/Modal";

const Abilities = props => {

    const [getSelectedAbility, setSelectedAbility] = useState("");

    const abilityList = props["abilities"];

    const fetchSelectedAbility = (ability) => {
        
        fetch(ability).then(response => response.json())
        .then(data => {
            setSelectedAbility(data);
            console.log(data, 'abil')
        })
        .catch(error => {
            console.log(error);
        })
    }

    let generateAbilities = [];

    if(abilityList.length) {
        generateAbilities = props["abilities"].map(currentAbility => {
            return (
                <div key={currentAbility.ability.name}>
                    {currentAbility.is_hidden && <span>Hidden Ability: </span>}
                    {!currentAbility.is_hidden && <span>Ability: </span>}
                    <span onClick={() => {fetchSelectedAbility(currentAbility.ability.url)}}>{currentAbility.ability.name}</span>
                </div>
            );
        });
    }

    let ModalContent = [];

    if(getSelectedAbility !== "") {
        ModalContent = [
            {"title": "Name", "value": getSelectedAbility["name"]},
            {"title": "Effect", "value": getSelectedAbility["effect_entries"][1]["effect"]},
            {"title": "Short Effect", "value": getSelectedAbility["effect_entries"][1]["short_effect"]},
            {"title": "ID", "value": getSelectedAbility["id"]}
        ];
        console.log(ModalContent, 'modalcontent')
    }

    return (
        <div className={classes["abilities-section"]}>
            <h2>Abilities</h2>
            <div className={classes["abilities-wrapper"]}>
                {generateAbilities}
            </div>
            {getSelectedAbility !== "" && <Modal content={ModalContent} />}
        </div>
    );
}

export default Abilities;