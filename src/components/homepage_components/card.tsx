import { PropsCard, React, Image } from "@/app/global.imports";



const Card : React.FC<PropsCard> = ({id, title, header, reacts, comments, views, imagelink}) => {
    return (
        <div className="flex flex-col w-20p h-96" id="card">
            <div className="post-options">
                <button className="post-btn-mark"><i className="fas fa-bookmark"></i></button>
                <button className="post-btn-save"><i className="fas fa-save"></i></button>
            </div>
            <div className="post-img">
                <Image src={imagelink} alt="" width={'360'} height={'500'} />
            </div>
            <div className="post-description">
                <h2>{title}</h2>
                <p>
                    {header}
                </p>
            </div>
            <div className="post-details">
                <div>
                    <i className="fas fa-heart"></i>
                    <span>{reacts}</span>
                </div>
                    <div>
                        <i className="fas fa-comment"></i>
                        <span>{comments}</span>
                    </div>
                    <div>
                        <i className="fas fa-eye"></i>
                        <span>{views}</span>
                    </div>
            </div>
        </div>
    )
}

export default Card;