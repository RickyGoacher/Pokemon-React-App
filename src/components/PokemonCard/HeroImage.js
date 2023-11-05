import HeroCarousel from "../../UI/HeroCarousel";

const HeroImage = props => {

    const Images = props["images"];

    let HeroImages = [];
    
    if(Images !== "") {
        HeroImages = [
            Images["other"]["official-artwork"].front_default,
            Images["other"]["official-artwork"].front_shiny,
            Images["other"].dream_world.front_default,
            Images["other"].home.front_default,
            Images["other"].home.front_shiny
        ];
    }

    return (
        <>
            { HeroImages.length > 0 && <HeroCarousel images={HeroImages} /> }
        </>
    )
}

export default HeroImage;