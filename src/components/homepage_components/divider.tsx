import { PropsDivider, React } from "@/app/global.imports";


const Divider: React.FC<PropsDivider> = ({title, divider}) => {

    return (
        <div className="title">
            <h2>{title}</h2>
            {
                divider === 'true' ? (
                    <div 
                        className="div-line">
                    </div>
                ) : (
                    <></>
                )
            }
        </div>
    )
}

export default Divider;