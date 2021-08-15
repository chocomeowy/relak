import React from "react";
import { useState } from "react";
import ReactHowler from "react-howler";
import { AwesomeButton } from "react-awesome-button";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";

const WindChime = () => {
  const [play, setPlay] = useState(false);
  const url =
    "https://dl.dropboxusercontent.com/s/benwlhnewvfoxrr/windChime.ogg?dl=0";

  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div>
      <h2>Wind Chimes</h2>

      <h4>Feel the breeze with specially selected Wind Chimes.</h4>
      {play ? (
        <>
          <ReactHowler src={url} playing={true} loop={true} volume={0.0} />
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

export default WindChime;
