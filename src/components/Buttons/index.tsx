import React from 'react';
import * as S from './style'
import { FaPause, FaPlay } from 'react-icons/fa';

interface PlayPauseButtonProps {
  isPlaying: boolean;
  play: () => void;
  pause: () => void
}

export const PlayPauseButtons: React.FC<PlayPauseButtonProps> = ({ isPlaying, play, pause }) => {
  return (
    <S.ControlButtons>
      {isPlaying ? (
        <button onClick={pause}>
          <FaPause/>
        </button>
      ) : (
        <button onClick={play}>
          <FaPlay/>
        </button>
      )}
    </S.ControlButtons>
  );
};
