import React from 'react'
import {useState} from 'react'
import ReactHowler from 'react-howler'

const ForestRain = () => {
  const [play, setPlay] = useState(false)
  const url = "https://cors-anywhere.herokuapp.com/https://whitestone.com.sg/pr0j4/forestRain.ogg"

  const handlePlay = () => {
    setPlay(!play)
  };

  return (
<div>
        <ReactHowler
          src={url}
          playing={play}
        />
        <button onClick={handlePlay}>Play</button>
      </div>
  )
}

export default ForestRain;