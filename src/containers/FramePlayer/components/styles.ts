import styled from 'styled-components';

export const PlayerContainer = styled.div`
  position: relative;
  width: 680px;
  height: 400px;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DisplayArea = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.5s ease-in-out;  // Transição suave entre frames
  }

  img.active {
    opacity: 1;  // Imagem ativa visível
  }
`;

export const ControlOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.7));
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${PlayerContainer}:hover & {
    opacity: 1;
  }
`;
