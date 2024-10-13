import React from 'react';
import { FramePlayerContainer } from './components/PlayerContainer';
import * as S from './styles'

/*import image1 from '../../assets/img1.jpg'
import image2 from '../../assets/img2.jpg';
import image3 from '../../assets/img3.jpg';
import image4 from '../../assets/img4.jpg';*/

export const FramePlayerContent: React.FC = () => {
  const frames = [
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c',
    'https://images.unsplash.com/photo-1477587458883-47145ed94245',
    'https://images.unsplash.com/photo-1475483768296-6163e08872a1',
    'https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0',
  ];

  const fps = 1;

  return (
    <S.PlayerContent>
      <FramePlayerContainer frames={frames} fps={fps} />
    </S.PlayerContent>
  );
};

