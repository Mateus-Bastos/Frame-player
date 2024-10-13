import styled from 'styled-components';

export const ControlButtons = styled.div`
  display: flex;
  align-items: center;

  button {
    background: none;
    border: none;
    color: white;
    font-size: 18px;
    cursor: pointer;
    padding: 5px;
    //transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.7;
    }
  }
`;