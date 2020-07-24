import React, { useState } from 'react';

const CardInfo = () => {
    return(
        <article className="card__info">
            <h1 className="info__title">
                Shift the overall look and feel by adding these wonderful 
                touches to furniture in your home
            </h1>

            <p className="info__description">
                Ever been in a room and felt like something was missing? Perhaps 
                it felt slightly bare and uninviting. I’ve got some simple tips 
                to help you make any room feel complete.
            </p>

            <div className="card__footer">
                <div className="info__author">
                    <img src={process.env.PUBLIC_URL + '/static/img/avatar-michelle.jpg'} className="info__author-avatar"/>
                    <p className="info__author-name">Michelle Appleton</p>
                    <p className="info__author-date">28 Jun 2020</p>
                </div>

                <div className="info__share">
                    <div className="info__share-button">
                        <i className="fas fa-share" />
                    </div>
                </div>
            </div>
        </article>
    )
};

export default CardInfo;