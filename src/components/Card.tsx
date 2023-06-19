import React from "react";

interface CardProps {
    image: any;
    title: string;
    description: string;
    buttonText: string;
}

const Card: React.FC<CardProps> = ({ image, title, description, buttonText }) => {
    return (
        <div className="card w-96 glass">
            <figure>
                <img src={image} alt="image" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-color5 border-color5">{buttonText}</button>
                </div>
            </div>
        </div>
    );
};

export default Card;
