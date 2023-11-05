import classes from "./HeroCarousel.module.css";
import { useState } from "react";

const HeroCarousel = props => {

    const [getActiveImage, setActiveImage] = useState(props.images[0]);

    const Regex = /([\w\d_-]*)\/([\w\d_-]*)\/([\w\d_-]*)\.?[^/]*$/g;

    function toggleImage(event) {
        setActiveImage(event.target.src);
    }

    const generateHeroCarousel = props.images.map(image => {
        let imageName = image.match(Regex)[0];
        return (
            <div key={imageName} className={classes["image"]} onClick={toggleImage}>
                <img src={image} alt={imageName}/>
            </div>
        );
    });

    return (
        <div className={classes["hero-image"]}>
            <div className={classes["main-image"]} onClick={toggleImage}>
               <img src={getActiveImage} alt=""/>
            </div>
            <div className={classes["hero-image-list"]}>
                {generateHeroCarousel}
            </div>
        </div>
    );
}

export default HeroCarousel;