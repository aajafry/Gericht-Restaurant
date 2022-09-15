import React, { useRef, useState } from "react";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import { meal } from "../constants";

import "../styles/Intro.css";

const Intro = () => {
  const [playVideo, setPlayVideo] = useState();
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo((PrevPlayVideo) => !PrevPlayVideo);
    if (playVideo) {
      vidRef.current.pause();
    } else {
      vidRef.current.play();
    }
  };

  return (
    <div className="app__video">
      <video
        src={meal}
        ref={vidRef}
        type="video/mp4"
        controls={false}
        loop
        muted
      />

      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay__circle flex__center"
          onClick={handleVideo}
        >
          {playVideo ? (
            <BsPauseFill color="fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
