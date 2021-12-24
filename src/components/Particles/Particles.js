import React from "react";
import { Particles as ParticlesTS } from "react-tsparticles";

function Particles() {
  return (
    <ParticlesTS
      params={{
        fpsLimit: 60,
        background: {
          color: "#2A2A39",
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        backgroundMode: {
          enable: true,
        },
        particles: {
          color: {
            value: ["#555573", "#53535E", "#545465"],
          },
          links: {
            color: "#464659",
            enable: true,
          },
          move: {
            enable: true,
            speed: 1,
          },
          size: {
            value: 4,
            random: {
              enable: true,
              minimumValue: 1,
            },
            animation: {
              enable: true,
              speed: 2.5,
              minimumValue: 1,
            },
          },
          opacity: {
            value: 0.7,
            random: {
              enable: true,
              minimumValue: 0.4,
            },
          },
        },
      }}
    />
  );
}

export default Particles;
