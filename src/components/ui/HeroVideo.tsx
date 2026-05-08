"use client";

import { useEffect, useRef, useState } from 'react';

interface HeroVideoProps {
  src: string;
  className?: string;
}

export function HeroVideo({ src, className = "" }: HeroVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    let frameId: number;
    const fps = 30;
    const interval = 1000 / fps;
    let lastTime = 0;

    const animate = (time: number) => {
      if (direction === "backward") {
        const delta = time - lastTime;
        if (delta >= interval) {
          if (video.currentTime > 0.05) {
            // Decrement currentTime to simulate reverse playback
            // We use a small step to keep it somewhat smooth
            video.currentTime -= 0.04; 
            lastTime = time;
          } else {
            video.currentTime = 0;
            setDirection("forward");
            video.play().catch(() => {});
            return;
          }
        }
        frameId = requestAnimationFrame(animate);
      }
    };

    const handleEnded = () => {
      setDirection("backward");
    };

    if (direction === "forward") {
      video.addEventListener("ended", handleEnded);
      video.play().catch(() => {});
    } else {
      video.pause();
      frameId = requestAnimationFrame(animate);
    }

    return () => {
      video.removeEventListener("ended", handleEnded);
      cancelAnimationFrame(frameId);
    };
  }, [direction]);

  return (
    <video
      ref={videoRef}
      muted
      playsInline
      className={className}
      src={src}
      autoPlay
    />
  );
}
