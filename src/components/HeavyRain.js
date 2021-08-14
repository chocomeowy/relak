import React from 'react'
import {useState} from 'react'
import ReactHowler from 'react-howler'

const HeavyRain = () => {
  const [play, setPlay] = useState(false)
  const url = "./sounds/heavyRain.ogg"

  const handlePlay = () => {
    setPlay(!play)
  };

  return (
<div>
<h2>Heavy Rain</h2><br/>
    <h4>Torrential downpours may be your thing?</h4>
        <ReactHowler
          src={url}
          playing={play}
          loop={true}
        />
        <button onClick={handlePlay}>Play</button>
      </div>
  )
}

export default HeavyRain;