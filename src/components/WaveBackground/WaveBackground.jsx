import "./WaveBackground.scss";

import React, { useEffect } from "react";

const WaveBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("waveCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numWaves = 5; // Number of waves
    const waves = []; // Array to store wave data
    const baseAmplitude = 50; // Base height of each wave
    const speed = 0.01; // Speed of wave motion
    const topBottomPadding = 50; // Space at the top and bottom
    const minGap = 20; // Minimum vertical gap between waves

    let time = 0; // Tracks animation time

    // Initialize waves and their control points
    for (let i = 0; i < numWaves; i++) {
      const sectionHeight = (canvas.height - 2 * topBottomPadding) / numWaves;
      const controlPoints = [];

      // Create 4 control points for each wave
      for (let j = 0; j < 4; j++) {
        controlPoints.push({
          x: (j / 3) * canvas.width, // Equally divide canvas width
          y:
            j === 0 || j === 3
              ? topBottomPadding + sectionHeight * i + sectionHeight / 2 // Fixed edges
              : topBottomPadding + sectionHeight * i + sectionHeight / 2, // Start in the middle
          yBase: topBottomPadding + sectionHeight * i + sectionHeight / 2, // Fixed base for oscillation
          yOffset: Math.random() * 1000, // Random offset for unique motion
        });
      }

      waves.push({
        controlPoints,
        color: `hsl(${Math.random() * 360}, 70%, 70%)`, // Unique color for each wave
      });
    }

    const smoothNoise = (x) => Math.sin(x * 0.005) + Math.cos(x * 0.003);

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const enforceVerticalGap = () => {
      for (let i = 0; i < waves.length - 1; i++) {
        const currentWave = waves[i];
        const nextWave = waves[i + 1];

        nextWave.controlPoints.forEach((point, index) => {
          if (nextWave.controlPoints[index].y - currentWave.controlPoints[index].y < minGap) {
            nextWave.controlPoints[index].y = currentWave.controlPoints[index].y + minGap;
          }
        });
      }
    };

    const drawAreas = () => {
      for (let i = 0; i < waves.length - 1; i++) {
        const currentWave = waves[i];
        const nextWave = waves[i + 1];
        const whiteSpace = 10; // White space thickness

        ctx.beginPath();

        // Start at the left edge of the canvas
        ctx.moveTo(0, currentWave.controlPoints[0].y);

        // Draw the top curve (currentWave) from left to right
        for (let j = 0; j < currentWave.controlPoints.length - 1; j++) {
          const cp1 = currentWave.controlPoints[j];
          const cp2 = currentWave.controlPoints[j + 1];
          const midX = (cp1.x + cp2.x) / 2;
          const midY = (cp1.y + cp2.y) / 2;
          ctx.quadraticCurveTo(cp1.x, cp1.y, midX, midY);
        }

        ctx.lineTo(canvas.width, currentWave.controlPoints[currentWave.controlPoints.length - 1].y);

        // Draw the bottom curve (nextWave) from right to left
        ctx.lineTo(
          canvas.width,
          nextWave.controlPoints[nextWave.controlPoints.length - 1].y - whiteSpace
        );
        for (let j = nextWave.controlPoints.length - 1; j > 0; j--) {
          const cp1 = nextWave.controlPoints[j];
          const cp2 = nextWave.controlPoints[j - 1];
          const midX = (cp1.x + cp2.x) / 2;
          const midY = (cp1.y + cp2.y) / 2;
          ctx.quadraticCurveTo(cp1.x, cp1.y - whiteSpace, midX, midY - whiteSpace);
        }

        ctx.lineTo(0, nextWave.controlPoints[0].y - whiteSpace);
        ctx.closePath();

        ctx.fillStyle = currentWave.color;
        ctx.fill();
      }
    };

    const drawWaves = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      waves.forEach((wave) => {
        wave.controlPoints.forEach((point, index) => {
          if (index === 1 || index === 2) {
            point.y = point.yBase + smoothNoise(time + point.yOffset) * baseAmplitude;
            point.y = clamp(point.y, topBottomPadding, canvas.height - topBottomPadding);
          }
        });
      });

      enforceVerticalGap(); // Ensure vertical gap between waves
      drawAreas();
    };

    const animate = () => {
      time += 1;
      drawWaves();
      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      waves.forEach((wave, index) => {
        const sectionHeight = (canvas.height - 2 * topBottomPadding) / numWaves;
        wave.controlPoints.forEach((point, j) => {
          point.x = (j / 3) * canvas.width; // Redistribute control points horizontally
          point.yBase = topBottomPadding + sectionHeight * index + sectionHeight / 2; // Reset base positions
          point.y =
            j === 0 || j === wave.controlPoints.length - 1
              ? point.yBase // Keep edges fixed for left/right points
              : point.yBase;
        });
      });
    };

    window.addEventListener("resize", handleResize);
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas id="waveCanvas" style={{ display: "block" }} />;
};

export default WaveBackground;
