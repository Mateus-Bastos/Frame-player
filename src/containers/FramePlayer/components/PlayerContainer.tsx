import React from 'react';

import * as S from './styles';
import { useFramePlayer } from '../hooks/useFramePlayer';
import { PlayPauseButtons } from '../../../components/Buttons';
import { ProgressBar } from '../../../components/ProgressBar';
import { TimeDisplay } from '../../../components/TimeDisplay';

interface FramePlayerProps {
  frames: string[];
  fps: number;
}

export const FramePlayerContainer: React.FC<FramePlayerProps> = ({ frames, fps }) => {
  const totalFrames = frames.length;
  const {
    currentFrame,
    isPlaying,
    progress,
    currentTime,
    duration,
    play,
    pause,
    handleProgressChange,
  } = useFramePlayer({ totalFrames, fps });

  const togglePlayPause = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
  };

  return (
    <S.PlayerContainer>
      <S.DisplayArea onClick={togglePlayPause}>
        {frames.map((frame, index) => (
          <img
            key={index}
            src={frame}
            alt={`frame-${index}`}
            className={index === currentFrame ? 'active' : ''}
          />
        ))}
      </S.DisplayArea>

      <S.ControlOverlay>
        <PlayPauseButtons isPlaying={isPlaying} play={play} pause={pause}/>

        <ProgressBar progress={progress} onChange={(e) => handleProgressChange(Number(e.target.value))}/>

        <TimeDisplay currentTime={currentTime} duration={duration}/> 
      </S.ControlOverlay>
    </S.PlayerContainer>
  );
};
