import React from "react";
import { useState } from "react";
import ReactHowler from "react-howler";
import { AwesomeButton } from "react-awesome-button";
import { PlayCircleOutlined, PauseCircleOutlined } from "@ant-design/icons";

const SingingBowl = () => {
  const [play, setPlay] = useState(false);
  const url =
    "https://dl.dropboxusercontent.com/s/89cg6nn9md4rwkn/singing_bowl.m4a?dl=0";

  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div>
      <h2>Singing Bowl</h2>

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

export default SingingBowl;
