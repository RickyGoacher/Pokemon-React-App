import classes from "./HeroImage.module.css";
import {useState} from "react";

const HeroImage = props => {

    console.log(props, 'props')

    const [getActiveImage, setActiveImage] = useState("")

    let normalImage = "";
    let shinyImage = "";
    let dreamWorld = "";
    let normalHome = "";
    let shinyHome = "";

    if (props.images !== "") {
        console.log(props.images, 'testing')
        normalImage = props["images"]["other"]["official-artwork"].front_default;
        shinyImage = props["images"].other["official-artwork"].front_shiny;
        dreamWorld = props["images"].other.dream_world.front_default;
        normalHome = props["images"].other.home.front_default;
        shinyHome = props["images"].other.home.front_shiny;
    }

    function toggleImage(event) {
       setActiveImage(event.target.src) 
       console.log(event.target.src)
    }

    return (
        <div className={classes["hero-image"]}>
            <div className={classes["main-image"]} onClick={toggleImage}>
                {normalImage !== "" && <img src={getActiveImage !== "" ? getActiveImage : normalImage } id="normal" alt=""/>}
            </div>
            <div className={classes["hero-image-list"]}>
                <div className={getActiveImage === "normal" ? "active" : "" + classes["image"]} onClick={toggleImage}>
                    {normalImage !== "" && <img src={normalImage} id="normal" alt=""/>}
                </div>
                <div className={getActiveImage === "shiny" ? "active" : "" + classes["image"]} onClick={toggleImage}>
                    {shinyImage !== "" && <img src={shinyImage} id="shiny" alt=""/>}
                </div>
                <div className={getActiveImage === "dream" ? "active" : "" + classes["image"]} onClick={toggleImage}>
                   { dreamWorld !== "" && <img src={dreamWorld} id="dream" alt=""/>}
                </div>
                <div className={getActiveImage === "normal-home" ? "active" : "" + classes["image"]} onClick={toggleImage}>
                   { normalHome !== "" && <img src={normalHome} id="normal-home" alt=""/> }
                </div>
                <div className={getActiveImage === "shiny-home" ? "active" : "" + classes["image"]} onClick={toggleImage}>
                   { shinyHome !== "" && <img src={shinyHome} id="shiny-home" alt=""/>}
                </div>
            </div>
        </div>
    )
}

export default HeroImage;