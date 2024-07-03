import React, { useState } from 'react'
import PauseIcon from '@mui/icons-material/Pause'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
export function PrevArrow({ sliderRef }) {
  const handleClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev() // Call slickPrev method on Slider component
    }
  }

  return (
    <button className="" onClick={handleClick}>
      <ArrowBackIcon fontSize="inherit" />
    </button>
  )
}

export function NextArrow({ sliderRef }) {
  const handleClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <button className="" onClick={handleClick}>
      <ArrowForwardIcon fontSize="inherit" />
    </button>
  )
}
export function Pause({ sliderRef }) {
  const [isPlaying, setIsPlaying] = useState(true)

  const togglePlayPause = () => {
    if (isPlaying) {
      setIsPlaying(false)
      sliderRef.current.slickPause()
    } else {
      setIsPlaying(true)
      sliderRef.current.slickPlay()
    }
  }

  return (
    <button
      onClick={togglePlayPause}
      className="absolute right-0 top-[50] mt-5  w-10  md:static md:pl-2"
    >
      {isPlaying ? (
        <PauseIcon fontSize="inherit" />
      ) : (
        <PlayArrowIcon fontSize="inherit" />
      )}
    </button>
  )
}
