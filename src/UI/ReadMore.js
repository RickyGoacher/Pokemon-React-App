import { useState } from "react";
import classes from "./ReadMore.module.css";

const ReadMore = props => {

    const [getNumLimit, setNumLimit] = useState(1);

    let generateFlavourTextSection = props["content"].map((entry, i) => {
        if(i <= getNumLimit) {
            return (
                <div key={entry["title"]} className={classes["readmore-text-wrapper"]}>
                    <div className={classes["version"]}>
                        {entry["title"]}
                    </div>
                    <div className={classes["text"]}>
                        {entry["content"]}
                    </div>
                </div>
            )
        } else {
            return '';
        }
    });

    const toggleViewMore = (event) => {
        if(event.target.innerText === "View More") {
            setNumLimit(props["content"].length);
        } else {
            setNumLimit(1);
        }
    }

    return (
        <>
            {generateFlavourTextSection}
            <button className={classes["view-more-button"]} onClick={toggleViewMore}>{getNumLimit === 1 ? "View More" : "View Less"}</button>
        </>
    );
}

export default ReadMore;