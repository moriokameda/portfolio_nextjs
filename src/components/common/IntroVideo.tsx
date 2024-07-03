import { Box } from "@mui/material";
import React, { useRef, useState } from "react";

export default function IntroVideo() {
  const [video, setVideo] = useState('/movie2.mp4')
    const videoRef = useRef(null)
  return (
    <Box
      sx={ {
        position: "fixed",
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
      } }
    >
      <video
        ref={videoRef}
      ></video>
    </Box>
  )
}