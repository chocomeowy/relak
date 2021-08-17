import React from "react";
import { useState } from "react";
import ReactHowler from "react-howler";
import { AwesomeButton } from "react-awesome-button";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";

const HeavyRain = () => {
  const [play, setPlay] = useState(false);
  const url =
    "https://dl.dropboxusercontent.com/s/jvs82f7fu3h2jxw/HeavyRain.mp3?dl=0";

  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div>
      <h2>Heavy Rain</h2>

      <h4>Torrential downpours may be your thing?</h4>
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

export default HeavyRain;
