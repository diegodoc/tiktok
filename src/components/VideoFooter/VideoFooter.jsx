import React from "react";
import "../../styles/footer.css";

function VideoFooter() {
  return (
    <div className="footer">
      <div className="footer_text">
        <h3>@ulala3000</h3>
        <p>Descrição do vídeo</p>
        <div className="footer_music">
          <p>Titulo musica</p>
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
