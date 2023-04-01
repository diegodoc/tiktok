import React, { useState } from "react";
import "../../styles/videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

const VideoSidebar = ({ likes, messages, shares }) => {
  const [liked, setLike] = useState(false);

  const handleLike = () => setLike(!liked);

  return (
    <div className="videoSidebar">
      <div className="videoSidebar_options" onClick={handleLike}>
        {liked ? (
          <FavoriteIcon id="red_heart" fontSize="large" />
        ) : (
          <FavoriteBorderIcon fontSize="large" />
        )}
        <p>{liked ? likes : likes - 1}</p>
      </div>
      <div className="videoSidebar_options">
        <ChatIcon fontSize="large" />
        <p>{messages}</p>
      </div>
      <div className="videoSidebar_options">
        <ShareIcon fontSize="large" />
        <p>{shares}</p>
      </div>
    </div>
  );
};

export default VideoSidebar;
