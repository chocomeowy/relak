import React from "react";
import { useState } from "react";
import ReactHowler from "react-howler";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/themes/theme-rickiest.css";
import { PlayCircleOutlined } from "@ant-design/icons";
const ForestRain = () => {
  const [play, setPlay] = useState(false);
  const url =
    "https://cors-anywhere.herokuapp.com/https://whitestone.com.sg/pr0j4/forestRain.ogg";

  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div>
      <h2>Forest Rain</h2>

      <h4>Sometimes, the forest may be the best place to go.</h4>
      {play ? (
        <>
          <ReactHowler src={url} playing={true} /> <div>player</div>
        </>
      ) : (
        <>
          click to play
          <br />
        </>
      )}
      <AwesomeButton size="icon">
        {<PlayCircleOutlined onClick={handlePlay} />}
      </AwesomeButton>
    </div>
  );
};

export default ForestRain;
