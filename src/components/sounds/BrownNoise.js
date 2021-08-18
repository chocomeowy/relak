import React from "react";
import { useState } from "react";
import ReactHowler from "react-howler";
import { AwesomeButton } from "react-awesome-button";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";

const BrownNoise = () => {
  const [play, setPlay] = useState(false);
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Brownnoise.ogg";

  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div>
      <h2>Brown Noise</h2>

      <h4>Brown noise blocks out most frequencies, allowing you to focus.</h4>
      {play ? (
        <>
          <ReactHowler src={url} playing={true} loop={true} volume={0.2} />
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

export default BrownNoise;
