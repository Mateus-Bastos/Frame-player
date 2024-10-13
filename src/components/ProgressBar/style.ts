import styled from 'styled-components';

export const ProgressBarContainer = styled.div`
  flex-grow: 1;
  margin: 0 15px;
  display: flex
`;

export const ProgressBar = styled.input.attrs((props) => ({
  type: 'range',
  style: {
    background: `linear-gradient(to right, red ${props.value}%, #444 ${props.value}%)`,
  },
  }))`
  width: 100%;
  height: 5px;
  border-radius: 3px;
  -webkit-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: white;
    cursor: pointer;
  }
`;