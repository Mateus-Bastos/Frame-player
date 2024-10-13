import React from 'react';
import * as S from './style'

interface TimeDisplayProps {
  duration: number;
  currentTime: number
}

export const TimeDisplay: React.FC<TimeDisplayProps> = ({ currentTime, duration }) => {
  return (
    <S.TimeDisplay>
        {currentTime.toFixed(2)}s / {duration.toFixed(2)}s
    </S.TimeDisplay>
  );
};
