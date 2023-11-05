import classes from "./Abilities.module.css";

const Abilities = props => {

    const abilityList = props["abilities"];

    let generateAbilities = [];

    if(abilityList.length) {
        generateAbilities = props["abilities"].map(currentAbility => {
            return (
                <div key={currentAbility.ability.name}>
                    {currentAbility.is_hidden && <span>Hidden Ability: </span>}
                    {!currentAbility.is_hidden && <span>Ability: </span>}
                    <a href={currentAbility.ability.url}><span>{currentAbility.ability.name}</span></a>
                </div>
            );
        });
    }

    return (
        <div className={classes["abilities-section"]}>
            <h2>Abilities</h2>
            <div className={classes["abilities-wrapper"]}>
                {generateAbilities}
            </div>
        </div>
    );
}

export default Abilities;