import React from 'react';
import '../../App.css';
import '../Card.css';
import VideoPlayer from '../VideoPlayer.js'

function UnityGameProject() {
    const vid = "https://www.youtube.com/watch?v=mjr6LrtfuBE";
    return (
        <div>
            <h1 className='about'>Unity Game Project</h1>
            <div className="cards">
                <h1>Welcome to my Unity Game Project</h1>
                <h1>
                    <a href="https://github.com/MinhDuc1711/City-Player-Walkability-Branch" target="_blank" rel="noopener noreferrer">
                        Check out the Github page
                    </a>
                </h1>
                <h1>My video demo!</h1>
                <VideoPlayer video_url="mjr6LrtfuBE" />
            </div>
        </div>
    )
}

export default UnityGameProject;