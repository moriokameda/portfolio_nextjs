import Image from "next/image";
import styles from "../page.module.css";
import React from "react";
import { Box } from "@mui/material";

export default function About() {
  const video = '/movie2.mp4';
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
        autoPlay
        loop
        muted
        style={ {
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '50%',
          left: '50%',
          objectFit: 'cover',
          transform: 'translate(-50%, -50%)',
          zIndex: -1
        } }
      >
        <source src={ video } type="video/mp4"/>
      </video>
    </Box>
  );
}
