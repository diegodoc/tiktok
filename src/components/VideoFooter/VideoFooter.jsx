import React from "react";
import "../../styles/footer.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="footer">
      <div className="footer_text">
        <h3>@ulala3000</h3>
        <p>Gatinho com fome</p>
        <div className="footer_music">
          <MusicNoteIcon />
          <div className="video_music_text">
            <p>Musica horrivel estourada</p>
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
}

export default VideoFooter;
