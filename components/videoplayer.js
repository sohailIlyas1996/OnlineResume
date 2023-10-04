// components/VideoPlayer.js
import React from 'react';

const VideoPlayer = () => {
  return (
    
 
      <video  width="100%" height="100vh" autoPlay muted loop>
        <source src="/videos/bgVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
  );
};

export default VideoPlayer;
