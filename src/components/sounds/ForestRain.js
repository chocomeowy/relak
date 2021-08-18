import React from "react";
import { useState } from "react";
import ReactHowler from "react-howler";
import { AwesomeButton } from "react-awesome-button";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";
const ForestRain = () => {
  const [play, setPlay] = useState(false);
  const url =
    "https://dl.dropboxusercontent.com/s/0w2069tr8l1rn35/ForestRain.mp3?dl=0";

  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div>
      <h2>Forest Rain</h2>
      <h4>Sometimes, the forest may be the best place to go.</h4>
      {play ? (
        <>
          <ReactHowler src={url} playing={true} loop={true} />
        </>
      ) : (
        <></>
      )}
      <AwesomeButton size="icon" onPress={handlePlay}>
        {play ? (
          <>{<PauseCircleOutlined />} </>
        ) : (
          <>{<PlayCircleOutlined />} </>
        )}
      </AwesomeButton>
    </div>
  );
};

export default ForestRain;
