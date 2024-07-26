import { PropsCircleCard, React, Image } from "@/app/global.imports";



const CircleCard : React.FC<PropsCircleCard> = ({name, office, image}) => {
    return (
        <div className="main-circle">
            <Image src={image} alt="" />
            <div className="description">
                <h4>{name}</h4>
                <h4>{office}</h4>
            </div>
        </div>
    )
}

export default CircleCard;