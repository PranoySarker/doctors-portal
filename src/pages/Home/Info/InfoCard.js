import React from 'react';

const InfoCard = ({ img, cardTitle, bgColor }) => {
    return (
        <div class={`card lg:card-side shadow-xl ${bgColor}`}>
            <figure><img src={img} alt="Album" className='pl-5' /></figure>
            <div class="card-body text-white">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCard;