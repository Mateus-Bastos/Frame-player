import React from 'react';
import * as S from './style'

interface ProgressBarProps {
    progress: number;
    onChange: (e: any) => void
}

export const ProgressBar: React.FC<ProgressBarProps> = ({progress, onChange}) => {
  return (
    <S.ProgressBarContainer>
        <S.ProgressBar
            type="range"
            min="0"
            max="100"
            value={progress}
            onChange={onChange}
        />
    </S.ProgressBarContainer>
  );
};