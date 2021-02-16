import React from 'react';

import PodItem from '../pod-item/pod-item';
import './pod-preview.styles.scss';

const PodPreview = ({ title, items }) => (
    <div className='podcast-preview'>
        <h1 className='podcast-preview__title'>{title}</h1>
        <div className='podcast-preview__items'>
            {
                items.map(item => (
                    <PodItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
);

export default PodPreview;