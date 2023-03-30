import React from "react";
import "./styles/App.css";
import "./components/Video";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <div className="app_videos">
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
        <Video />
      </div>
    </div>
  );
}

export default App;
