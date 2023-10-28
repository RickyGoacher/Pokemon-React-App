import classes from "./HeroImage.module.css";
import {useState} from "react";

const HeroImage = props => {

    const [getActiveImage, setActiveImage] = useState("normal")

    const normalImage = props.images.front_default;
    const shinyImage = props.images.front_shiny;

    function toggleImage(event) {
        setActiveImage(event.target.id);
    }

    return (
        <div className={classes["hero-image"]}>
            <div className={getActiveImage === "normal" ? "active" : "" + classes["image"]} onClick={toggleImage}>
                <img src={normalImage} id="normal" alt=""/>
            </div>
            <div className={getActiveImage === "shiny" ? "active" : "" + classes["image"]} onClick={toggleImage}>
                <img src={shinyImage} id="shiny" alt=""/>
            </div>
        </div>
    )
}

export default HeroImage;