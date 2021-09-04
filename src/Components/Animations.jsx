import React from 'react';
import { Images } from '../assets/index'

const Animations = () => {

    const playPause = () => {
        const running = document.getElementById('starImg').style.animationPlayState === 'running';
        document.getElementById('starImg').style.animationPlayState = running ? 'paused' : 'running';
    }

    return (
        <div className='anim' >
            <div id="star" >
                <img id='starImg' width='180' height='180' src={Images.feedback} alt="" />
            </div>
            <div>
                <button id='spin' onClick={playPause} >play/pause</button>
            </div>
        </div>
    )
}

export default Animations
