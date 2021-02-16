import React from 'react';

import PodPreview from '../../components/pod-preview/pod-preview';
import PODCAST_DATA from '../../podcast.data';
import './guotes.styles.scss';

const Guotes = () => {
    console.log(PODCAST_DATA[1])
    return(
    <div className='guotes'>
        <PodPreview {...PODCAST_DATA[3]} colunmm />
        <div className='player'>
            <h3 className='player__title'>Now Playing</h3>
            <div className='player__box'>
                <span>Design</span>
                <span>Better</span>
                <span>Podcast</span>
            </div>
            <div className='player__music'>
                <h3 className='player__music-title'>Design Better Podcast</h3>
                <span className='player__music-subtitle'>Apple TV+</span>
            </div>
            <div className='player__play'>
                <span className='player__play-first'>12:35</span>
                <div className='player__play-center'></div>
                <span className='player__play-last'>43:05</span>
            </div>
            <div className='player__control'>
                <span className="material-icons sp">repeat</span>
                <span className="material-icons sp">skip_previous</span>
                <span className="material-icons sp play">play_arrow</span>
                <span className="material-icons sp">skip_next</span>
                <span className="material-icons sp">shuffle</span>
            </div>
        </div>
    </div>
)};

export default Guotes;