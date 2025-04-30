import styled from 'styled-components';
import palette from '@styles/theme';

import emptyPuzzleImg from '@assets//puzzle/empty_puzzle.png';

export const top = styled.div`
  margin: 34px 0 24px 28px;
`;

export const puzzleInfo1 = styled.div`
  color: ${palette.grayscale.text33};
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 15px;
`;

export const puzzleInfo2 = styled.div`
  color: ${palette.grayscale.text33};
  font-weight: 400;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const goMap = styled.button`
  display: flex;
  flex-direction: row;
  gap: 6px;

  padding: 4px 10px;
  border-radius: 16px;
  background: var(--Grayscale-White, #fff);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  margin-right: 4px;
`;

export const login = styled.div`
  display: flex;
  flex-direction: column;
`;

export const inputNickname = styled.div`
  margin-bottom: 4px;
`;

export const inputPassword = styled.div`
  margin-bottom: 8px;
`;

export const puzzleGame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const emptyPuzzle = styled.div`
  width: 90vw;
  aspect-ratio: 1;
  background-image: url(${emptyPuzzleImg});

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const boothIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const userName = styled.div``;

export const endButton = styled.div``;

export const completedTitle = styled.div``;

export const completedPuzzle = styled.div``;

export const userInfo = styled.div``;

export const todoPuzzle = styled.div``;

export const completedPuzzleBox = styled.div``;

export const puzzleCount = styled.div``;

export const glowPuzzleIcon = styled.img``;

export const CompletedInfo = styled.div``;

export const whiteErrorIcon = styled.img``;

export const successPuzzle = styled.div``;

export const whiteCheck = styled.img``;

export const semibold20 = styled.div`
  color: ${palette.grayscale.black};
  font-weight: 600;
  font-size: 14px;
`;

export const regular14 = styled.div`
  color: ${palette.grayscale.text33};
  font-weight: 400;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const semibold16 = styled.div`
  color: ${palette.grayscale.black};
  font-weight: 600;
  font-size: 16px;
`;

export const whiteRegular16 = styled.div`
  font-weight: 400;
  color: ${palette.grayscale.white};
  font-size: 16px;
`;

export const whiteSemibold16 = styled.div`
  font-weight: 600;
  color: ${palette.grayscale.white};
  font-size: 16px;
`;

export const bold14 = styled.div`
  color: ${palette.grayscale.black};
  font-weight: 700;
  font-size: 14px;
`;

export const semibold36 = styled.div`
  color: ${palette.grayscale.black};
  font-weight: 600;
  font-size: 36px;
`;

export const regular20 = styled.div`
  color: ${palette.grayscale.black};
  font-weight: 400;
  font-size: 20px;
`;

export const regular16 = styled.div`
  color: ${palette.grayscale.black};
  font-weight: 400;
  font-size: 16px;
`;

export const purpleRegular14 = styled.div`
  color: ${palette.mainPurple};
  font-weight: 400;
  font-size: 14px;
`;

export const purplesemibold16 = styled.div`
  color: ${palette.mainPurple};
  font-weight: 600;
  font-size: 16px;
`;

export const semibold14 = styled.div`
  color: ${palette.grayscale.black};
  font-weight: 600;
  font-size: 14px;
`;
