import React from "react";
import { useState } from "react";
import ReactHowler from "react-howler";

const WindChime = () => {
  const [play, setPlay] = useState(false);
  const url = "https://getmega.net/download/file_eac3862ee0/windChime.ogg";

  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div>
      <h2>Wind Chimes</h2>
      <br />
      <h4>Feel the breeze with specially selected Wind Chimes.</h4>
      <ReactHowler src={url} playing={play} />
      <button onClick={handlePlay}>Play</button>
    </div>
  );
};

export default WindChime;
