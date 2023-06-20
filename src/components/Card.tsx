import React from "react";

interface CardProps {
    image: any;
    title: string;
    description: string;
    buttonText: string;
    onClickdata: any
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonText, onClickdata }) => {

    const handleButtonClick = () => {
        window.open(onClickdata, "_blank");
    };

    return (
        <div className="card lg:card-side bg-color2 shadow-xl">
            <figure><img src={image} alt="Album" className="" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-color5 border-color5" onClick={handleButtonClick}>{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
