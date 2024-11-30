import React, { useEffect, useRef } from "react";
import "./WaveBackground.scss";

const WaveBackground = () => {
  useEffect(() => {
    const canvas = document.getElementById("waveCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const numWaves = 5;
    const waves = [];
    const baseAmplitude = 50;
    const speed = 0.1;
    const topBottomPadding = 50;
    const minGap = 20;

    // New: Control frame rate
    const targetFPS = 20; // Adjust this to control performance
    const frameDelay = 1000 / targetFPS;
    let lastFrameTime = 0;

    let time = 0;

    const initialColors = ["#bfa2d4", "#91bfd8", "#acd491", "#e49b9b"];

    for (let i = 0; i < numWaves; i++) {
      const sectionHeight = (canvas.height - 2 * topBottomPadding) / numWaves;
      const controlPoints = [];

      for (let j = 0; j < 4; j++) {
        controlPoints.push({
          x: (j / 3) * canvas.width,
          y:
            j === 0 || j === 3
              ? topBottomPadding + sectionHeight * i + sectionHeight / 2
              : topBottomPadding + sectionHeight * i + sectionHeight / 2,
          yBase: topBottomPadding + sectionHeight * i + sectionHeight / 2,
          yOffset: Math.random() * 1000,
        });
      }

      waves.push({
        controlPoints,
        color: initialColors[i % initialColors.length],
        initialColor: initialColors[i % initialColors.length],
        targetColor: null,
        transitionProgress: 0,
        isReturning: false,
      });
    }

    const hexToRgb = (hex) => {
      hex = hex.replace(/^#/, "");
      const bigint = parseInt(hex, 16);
      const r = (bigint >> 16) & 255;
      const g = (bigint >> 8) & 255;
      const b = bigint & 255;
      return `rgb(${r}, ${g}, ${b})`;
    };

    const lerpColor = (startColor, endColor, t) => {
      t = Math.max(0, Math.min(1, t));

      const start = startColor.startsWith("rgb") ? startColor : hexToRgb(startColor);
      const end = endColor.startsWith("rgb") ? endColor : hexToRgb(endColor);

      const startVals = start.match(/\d+/g).map(Number);
      const endVals = end.match(/\d+/g).map(Number);

      const r = Math.round(startVals[0] + (endVals[0] - startVals[0]) * t);
      const g = Math.round(startVals[1] + (endVals[1] - startVals[1]) * t);
      const b = Math.round(startVals[2] + (endVals[2] - startVals[2]) * t);

      return `rgb(${r}, ${g}, ${b})`;
    };

    const smoothNoise = (x) => Math.sin(x * 0.07) + Math.cos(x * 0.07);

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
        const whiteSpace = 10;

        ctx.beginPath();

        ctx.moveTo(0, currentWave.controlPoints[0].y);

        for (let j = 0; j < currentWave.controlPoints.length - 1; j++) {
          const cp1 = currentWave.controlPoints[j];
          const cp2 = currentWave.controlPoints[j + 1];
          const midX = (cp1.x + cp2.x) / 2;
          const midY = (cp1.y + cp2.y) / 2;
          ctx.quadraticCurveTo(cp1.x, cp1.y, midX, midY);
        }

        ctx.lineTo(canvas.width, currentWave.controlPoints[currentWave.controlPoints.length - 1].y);

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

        const activeCard = document.getElementById("active-card-color");
        const activeCardColor =
          activeCard && getComputedStyle(activeCard).backgroundColor !== "rgba(0, 0, 0, 0)"
            ? getComputedStyle(activeCard).backgroundColor
            : null;

        let fillColor = currentWave.color;

        // Check for color transition
        if (activeCardColor) {
          // Transitioning to active card color
          if (!currentWave.targetColor || currentWave.targetColor !== activeCardColor) {
            currentWave.targetColor = activeCardColor;
            currentWave.transitionProgress = 0;
            currentWave.isReturning = false;
          }

          currentWave.transitionProgress = Math.min(1, currentWave.transitionProgress + 0.05);

          fillColor = lerpColor(
            currentWave.color,
            currentWave.targetColor,
            currentWave.transitionProgress
          );

          if (currentWave.transitionProgress >= 1) {
            currentWave.color = currentWave.targetColor;
          }
        } else if (currentWave.targetColor) {
          // Transitioning back to initial color
          if (!currentWave.isReturning) {
            currentWave.isReturning = true;
            currentWave.transitionProgress = 0;
          }

          currentWave.transitionProgress = Math.min(1, currentWave.transitionProgress + 0.05);

          fillColor = lerpColor(
            currentWave.color,
            currentWave.initialColor,
            currentWave.transitionProgress
          );

          if (currentWave.transitionProgress >= 1) {
            currentWave.color = currentWave.initialColor;
            currentWave.targetColor = null;
            currentWave.isReturning = false;
          }
        }

        ctx.fillStyle = fillColor;
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

      enforceVerticalGap();
      drawAreas();
    };

    const animate = (currentTime) => {
      // Limit frame rate
      if (currentTime - lastFrameTime >= frameDelay) {
        time += speed;
        drawWaves();
        lastFrameTime = currentTime;
      }

      requestAnimationFrame(animate);
    };

    // Start the animation
    requestAnimationFrame(animate);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      waves.forEach((wave, index) => {
        const sectionHeight = (canvas.height - 2 * topBottomPadding) / numWaves;
        wave.controlPoints.forEach((point, j) => {
          point.x = (j / 3) * canvas.width;
          point.yBase = topBottomPadding + sectionHeight * index + sectionHeight / 2;
          point.y = j === 0 || j === wave.controlPoints.length - 1 ? point.yBase : point.yBase;
        });
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <canvas id="waveCanvas" style={{ display: "block" }} />;
};

export default WaveBackground;
