import React from 'react';

import PodPreview from '../../components/pod-preview/pod-preview';
import './content.styles.scss';
import PODCAST_DATA from '../../podcast.data';
// import image from '../../assets/pod1.png';

const Content = ({imageUrl, title, subtitle}) => (
    <div className='content'>
        <form className='form'>
            <input type='text' className='form__input' placeholder='Search' />
            <span className="material-icons">search</span>
        </form>
        <div className='podcast-list'>

            {
                PODCAST_DATA
                    .filter(item => item.id < 4)
                    .map(({id, ...otherProps}) => (
                        <PodPreview key={id} { ...otherProps } />
                ))
            }
        </div>
    </div>
);

export default Content;