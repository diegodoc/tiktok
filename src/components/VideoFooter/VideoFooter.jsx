import React from "react";
import "../../styles/footer.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

const VideoFooter = ({ name, description, music }) => {
  return (
    <div className="footer">
      <div className="footer_text">
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="footer_music">
          <MusicNoteIcon />
          <div className="video_music_text">
            <p>{music}</p>
          </div>
        </div>
      </div>
      <img
        className="footer_icon"
        alt="spinning vinil disc"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
};

export default VideoFooter;
