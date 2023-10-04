// components/VideoPlayer.js
"use client"
import React from 'react';
import MyVideo from '../public/Videos/bgVideo.mp4'
const VideoPlayer = () => {
  return (
    
 
      <video  width="100%" height="100vh" autoPlay muted loop>
        <source src={MyVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    
  );
};

export default VideoPlayer;
