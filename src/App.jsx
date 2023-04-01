import React from "react";
import "./styles/App.css";
import "./components/Video";
import Video from "./components/Video";

const App = () => {
  return (
    <div className="App">
      <div className="app_videos">
        <Video
          likes={420}
          messages={200}
          shares={69}
          name="@ulala3000"
          description="Gatinho goleiro s2 #gol"
          music="Musica de ação"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video
          likes={5858}
          messages={2828}
          shares={1}
          name="@diego-clemente"
          description="Miau"
          music="ta meio alta a músicakkkk"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video
          likes={8227}
          messages={225}
          shares={25}
          name="@meowmeow"
          description="meow meow meow #meow"
          music="miau"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video
          likes={12}
          messages={2}
          shares={1}
          name="@loremipsum"
          description="pipipipopopo"
          music="lalalalalalalalalalalalalala"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
      </div>
    </div>
  );
};

export default App;
