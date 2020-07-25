import React from 'react';

const ShareMenu = ({active}) => {

    const socialIcons = [
      'icon-facebook.svg',  
      'icon-twitter.svg', 
      'icon-pinterest.svg' 
    ]

    return (
        <div className="share-menu">
            <p className="share-menu__text">SHARE</p>
            {
                socialIcons.map((icon, i) => (
                    <img 
                        src={process.env.PUBLIC_URL + '/static/svg/' + icon} 
                        className="share-menu__icon" 
                        key={i} 
                        alt="icon" />
                ))
            }
        </div>
    )
};

export default ShareMenu;