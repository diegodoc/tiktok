import React, { useRef, useState } from "react";
import "../styles/video.css";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "../components/sidebar/VideoSidebar";

const Video = () => {
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
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        loop
      ></video>
      <VideoSidebar />
      <VideoFooter />
    </div>
  );
};

export default Video;
