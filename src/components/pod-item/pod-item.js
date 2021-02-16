import React from 'react';

import './pod-item.styles.scss';

const PodItem = ({ item: {title, subtitle, imageUrl} }) => (
    <div className='podcast-item'>
        <div 
            className='podcast-item__image' 
            style={{
                backgroundImage: `url(${imageUrl})`, 
                height: '100px', 
                width: '100px',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
            }}
        ></div>
        <div className='podcast-item__footer'>
            <span className='podcast-item__footer--title'>{title}</span>
            <span className='podcast-item__footer--subtitle'>{subtitle}</span>
        </div>
    </div>
);

export default PodItem;