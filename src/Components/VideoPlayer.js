import React from 'react';
import './VideoPlayer.css';

function VideoPlayer({video_url}) {
  return (
    <div className="video-container">
      <iframe 
        src={`https://www.youtube.com/embed/${video_url}`}
        title="YouTube demo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

export default VideoPlayer;
