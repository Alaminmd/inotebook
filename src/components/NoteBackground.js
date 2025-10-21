import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim"; // or loadFull for more options

const NoteBackground = () => {

const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // You can initialize the tsParticles instance (engine) here,
    // adding custom shapes or presets if needed.
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);

  const options = {
    // --- Overall Appearance ---
    background: {
      color: {
        value: "#f5f5f5", // Light background for the note app
      },
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        // --- Interactive Effects ---
        onHover: {
          enable: true,
          mode: "repulse", // Particles move away when the mouse is near
        },
        onClick: {
          enable: true,
          mode: "push", // Clicks generate new particles
        },
        resize: true,
      },
      modes: {
        repulse: {
          distance: 50,
          duration: 0.4,
        },
        push: {
          quantity: 2,
        },
      },
    },

    // --- Particle Settings (The 'Note Trail' Effect) ---
    particles: {
      number: {
        value: 80, // Number of particles
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#9e9e9e", // Subtle gray color
      },
      shape: {
        type: "circle", // Simple dots
      },
      size: {
        value: 3, // Small dots
        random: true,
        anim: {
          enable: false,
        },
      },
      // --- Movement and Trail ---
      move: {
        enable: true,
        speed: 0.8, // Slow, gentle movement
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
      // --- Connecting Lines (The "Constellation" look) ---
      links: {
        enable: true,
        distance: 150, // Max distance for lines to appear
        color: "#bdbdbd", // Slightly lighter color for lines
        opacity: 0.3,
        width: 1,
      },
    },
    detectRetina: true,
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1, // Crucial: ensures it stays behind your notes/UI
      }}
    />
  );
};

export default NoteBackground