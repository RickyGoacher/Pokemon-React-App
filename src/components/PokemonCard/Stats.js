import classes from "./Stats.module.css";

const Stats = props => {

    let currentStats = props["stats"];

    const generateStats = currentStats.map(currentStat => {
        return (
            <div key={currentStat["stat"]["name"]} className={classes["stat"]}>
                <span>{currentStat["stat"]["name"]}:</span><span> {currentStat["base_stat"]}</span>
            </div>
        )
    })

    return (
        <div className={classes["stats-container"]}>
            <div className={classes["stats-wrapper"]}>
                {generateStats}
            </div>
        </div>
    )

}

export default Stats;