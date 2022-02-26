import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    var video = document.getElementById('myvideo');
    video.play();
  }, []);

  return (
    <div className='wrapper'>
      <div className='video-container'>
        <video
          id='myvideo'
          src='video_home.mp4'
          className='video'
          loop
          autoplay
          muted
        />
      </div>
    </div>
  );
}

export default App;
