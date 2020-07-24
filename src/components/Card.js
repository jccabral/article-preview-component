import React from 'react';
import CardInfo from './CardInfo';

console.log(process.env.PUBLIC_URL)

const Card = () => {
    return(
        <section className="card">
            <div className="card__image">
                <img src={process.env.PUBLIC_URL + '/static/img/drawers.jpg'} alt="drawer" className="card__image--content"/>
            </div>

            <CardInfo />

        </section>
    )
};

export default Card;