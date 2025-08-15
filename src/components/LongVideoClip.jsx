import React, { useRef, useState } from "react";
import play from "../assets/images/playAnimation.gif";

const LongVideoClip = ({ videoUrl, thumbnail }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
      video.setAttribute("controls", "true");
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="longVideoClip" onClick={handlePlay} style={{ position: "relative" }}>
      <video
        ref={videoRef}
        muted
        loop
        poster={thumbnail}
      
      >
        <source src={videoUrl} type="video/mp4" />
      </video>
      {!isPlaying && (
        <img
          src={play}
          alt="Play"
        />
      )}
    </div>
  );
};

export default LongVideoClip;
