import React, { useRef, useState } from "react";
import "../styles/video.css";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "../components/sidebar/VideoSidebar";

const Video = ({ likes, messages, shares, name, description, music, url }) => {
  const videoRef = useRef(null);
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    if (play) {
      videoRef.current.pause();
      setPlay(false);
    } else {
      videoRef.current.play();
      setPlay(true);
    }
  };

  return (
    <div className="video">
      <video
        className="video_player"
        ref={videoRef}
        onClick={handlePlay}
        src={url}
        loop
      ></video>
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <VideoFooter name={name} description={description} music={music} />
    </div>
  );
};

export default Video;
