import { useState, useRef } from 'react';
import { UseFramePlayerParams } from '../types/FramePlayer';

export const useFramePlayer = ({ totalFrames, fps }: UseFramePlayerParams) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  const duration = totalFrames / fps; 

  const play = () => {
    if (currentFrame >= totalFrames) {
      setCurrentFrame(0);
      setCurrentTime(0);
      setProgress(0);

      setTimeout(() => {
        setIsPlaying(true);
        startTimeRef.current = Date.now();
        iniciarAtualizacao();
      }, 0);
    } else {
      setIsPlaying(true);
      startTimeRef.current = Date.now() - currentTime * 1000; 
      iniciarAtualizacao();
    }
  };

  const pause = () => {
    setIsPlaying(false);
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
    }
  };

  const iniciarAtualizacao = () => {
    const updateFrame = () => {
      if (startTimeRef.current !== null) {
        const elapsedTime = (Date.now() - startTimeRef.current) / 1000; 
        const newTime = Math.min(elapsedTime, duration);

        setCurrentTime(newTime);
        const newFrame = Math.floor(newTime * fps); 

        if (newFrame >= totalFrames) {
          setIsPlaying(false);
          setCurrentFrame(totalFrames);
          setProgress(100);
        } else {
          setCurrentFrame(newFrame);
          setProgress((newTime / duration) * 100); 
          animationFrameIdRef.current = requestAnimationFrame(updateFrame);
        }
      }
    };

    animationFrameIdRef.current = requestAnimationFrame(updateFrame);
  };

  const handleProgressChange = (newProgress: number) => {
    const newTime = (newProgress / 100) * duration;
    const newFrame = Math.floor(newTime * fps);

    setCurrentFrame(newFrame);
    setCurrentTime(newTime);
    setProgress(newProgress);

    if (isPlaying) {
      startTimeRef.current = Date.now() - newTime * 1000;
    }
  };

  return {
    currentFrame,
    isPlaying,
    progress,
    currentTime,
    duration,
    play,
    pause,
    handleProgressChange,
  };
};
