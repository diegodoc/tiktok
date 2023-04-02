import React, { useEffect, useState } from "react";
import "./styles/App.css";
import Video from "./components/Video";
import db from "./config/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

const App = () => {
  const [videos, setVideos] = useState([]);

  async function getVideos() {
    const videoCollection = collection(db, "videos");
    const videoSnapshot = await getDocs(videoCollection);
    const videoList = videoSnapshot.docs.map((doc) => doc.data());
    setVideos(videoList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app_videos">
        {videos.map((item) => {
          return (
            <Video
              likes={item.likes}
              messages={item.messages}
              shares={item.shares}
              name={item.name}
              description={item.description}
              music={item.music}
              url={item.url}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
