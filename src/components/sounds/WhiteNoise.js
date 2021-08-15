import React from "react";
import { useState } from "react";
import ReactHowler from "react-howler";
import { AwesomeButton } from "react-awesome-button";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";

const WhiteNoise = () => {
  const [play, setPlay] = useState(false);
  const url =
    "https://upload.wikimedia.org/wikipedia/commons/9/98/White-noise-sound-20sec-mono-44100Hz.ogg";
  const url2 =
    "https://upload.wikimedia.org/wikipedia/commons/c/c9/Brownnoise.ogg";
  const url3 =
    "https://upload.wikimedia.org/wikipedia/commons/6/6c/Pink_noise.ogg";
  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div>
      <h2>White Noise</h2>

      <h4>White.</h4>
      {play ? (
        <>
          <ReactHowler src={url} playing={true} loop={true} />
        </>
      ) : (
        <></>
      )}
      <AwesomeButton size="icon">
        {play ? (
          <>{<PauseCircleOutlined onClick={handlePlay} />} </>
        ) : (
          <>{<PlayCircleOutlined onClick={handlePlay} />} </>
        )}
      </AwesomeButton>
    </div>
  );
};

export default WhiteNoise;
