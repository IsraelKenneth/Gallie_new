import React from 'react'
import "../features/howWork.css"

const Feature = ({ title, text }) => (
    <div className="gallie__features-container__feature">
        <div className="gallie__features-container__feature-title">
            <div />
            <h1>{title}</h1>
        </div>
        <div className="gallie__features-container_feature-text">
            <p>{text}</p>
        </div>
    </div>
);

export default Feature