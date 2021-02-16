import React from 'react';

import './pod-item.styles.scss';

const PodItem = ({ item: {title, subtitle, imageUrl, coluna} }) => (
    <div className={`podcast-item ${coluna ? 'colunm' : ''}`}>
        <div 
            className='podcast-item__image' 
            style={{
                backgroundImage: `url(${imageUrl})`, 
            }}
        ></div>
        <div className={`podcast-item__footer`}>
            <span className='podcast-item__footer--title'>{title}</span>
            <span className='podcast-item__footer--subtitle'>{subtitle}</span>
        </div>
    </div>
);

export default PodItem;