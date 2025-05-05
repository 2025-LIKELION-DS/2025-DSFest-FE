import styled from 'styled-components';
import palette from '@styles/theme';

export const Error = styled.div`
  width: 100%;
  min-height: 100%;
  background: linear-gradient(${palette.mainPurple10} 0%, ${palette.mainPurple10} 100%), ${palette.grayscale.white};

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 45px;
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  color: ${palette.puzzle.violet};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
`;

export const ErrorImg = styled.img`
  width: 237px;
  height: auto;
`;

export const BottomContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 64px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  padding: 12.5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 62px;
  background-color: ${palette.puzzle.violet};

  color: ${palette.grayscale.white};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
  cursor: pointer;
`;
