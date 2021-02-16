import React from 'react';

import PodItem from '../pod-item/pod-item';
import './pod-preview.styles.scss';

const PodPreview = ({ title, items, colunmm }) => (
    <div className='podcast-preview'>
        <div className='podcast-preview__top'>
            <h1 className='podcast-preview__title'>{title}</h1>
            <span className={`podcast-preview__see ${colunmm ? 'coluna-see' : ''}`}>{colunmm ? '...' : 'See All'}</span>
        </div>
        <div 
            className={`podcast-preview__items ${colunmm ? 'coluna' : ''}`}
            >
            {
                items.map(item => (
                    <PodItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
);

export default PodPreview;