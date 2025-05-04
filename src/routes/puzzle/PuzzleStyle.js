import styled from 'styled-components';
import palette from '@styles/theme';

import emptyPuzzleImg from '@assets/puzzle/empty_puzzle.png';
import successPuzzleImg from '@assets/puzzle/completed_puzzle.png';

export const puzzlePage = styled.div`
  height: calc(100svh - 50px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (hover: hover) and (pointer: fine) {
    height: calc(100svh - 50px);
    max-height: 798px;
  }

  @media (min-height: 1024px) {
    height: 800px;
  }
`;

export const currentPuzzleInfo = styled.div``;

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 25px;
`;

export const presentInfo = styled.div`
  width: 100%;
  color: ${palette.grayscale.text33};
  font-weight: 400;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  margin-top: 47px;

  @media (max-height: 750px) {
    margin-top: 20px;
  }

  @media (max-height: 700px) {
    margin-top: 10px;
  }
`;

export const emptyPuzzle = styled.div`
  width: 90vw;
  max-width: 343px;
  aspect-ratio: 1;
  background-image: url(${emptyPuzzleImg});

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 51px;

  @media (max-height: 750px) {
    margin-top: 0;
  }
`;

export const loginInfo = styled.div`
  width: calc(90vw - 20px);
  max-width: 323px;
  aspect-ratio: 1;
  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 10px;

  font-weight: 400;
  color: ${palette.grayscale.white};
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const boothIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const userInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const userName = styled.div`
  color: ${palette.grayscale.black};
  font-weight: 600;
  font-size: 20px;
`;

export const completedTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 25px;
`;

export const todoPuzzle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const completedPuzzleBox = styled.div`
  border-radius: 15px;
  background: var(--Grayscale-White, #fff);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  margin: 12px 25px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  height: 77px;
`;

export const semibold16 = styled.div`
  color: ${palette.grayscale.black};
  font-weight: 600;
  font-size: 16px;
  margin: 0 2px;
`;

export const puzzleCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const todoPuzzleCount = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  color: ${palette.grayscale.text33};
  font-weight: 600;
  font-size: 14px;
  margin-left: 2px;
`;

export const completedPuzzleCount = styled.div`
  color: ${palette.puzzle.complete};
  font-weight: 600;
  font-size: 36px;
`;

export const completedPuzzleCountInfo = styled.div`
  color: ${palette.puzzle.complete};
  font-weight: 400;
  font-size: 20px;
`;

export const completedPuzzle = styled.div``;

export const glowPuzzleIcon = styled.img`
  transform: rotate(19.763deg);
  aspect-ratio: 61.17/60.32;
`;

export const CompletedInfo = styled.div`
  width: calc(100% - 34px);
  border-radius: 14px;
  background-color: ${palette.grayscale.ef};
  padding: 18px 17px 28px 17px;
  margin-top: 23px;
`;

export const whiteErrorIcon = styled.img`
  margin-bottom: 6px;
`;

export const successPuzzle = styled.div`
  background-image: url(${successPuzzleImg});
  width: 80vw;
  max-width: 343px;
  aspect-ratio: 1;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 51px;
  margin-bottom: 10px;

  @media (max-height: 750px) {
    margin-top: 20px;
  }

  @media (max-height: 700px) {
    margin-top: 0px;
  }
`;

export const alreadySuccessInfo = styled.div`
  width: 80vw;
  max-width: 343px;

  aspect-ratio: 1;
  background-color: rgb(0, 0, 0, 0.7);
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const whiteCheck = styled.img`
  margin-bottom: 6px;
`;

export const whiteRegular16 = styled.div`
  font-weight: 400;
  color: ${palette.grayscale.white};
  font-size: 16px;
  display: flex;
  flex-direction: row;
`;

export const whiteSemibold16 = styled.div`
  font-weight: 600;
  color: ${palette.grayscale.white};
  font-size: 16px;
  margin-left: 2px;
`;

export const puzzle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin-bottom: 34px;
  margin-top: 51px;
  margin-bottom: 30px;

  @media (max-height: 750px) {
    margin-top: 20px;
  }

  @media (max-height: 700px) {
    margin-top: 0px;
  }
`;

export const puzzleGrid = styled.div`
  width: 100vw;
  aspect-ratio: 1;
  position: relative;
  right: 5px;
  max-height: 345px;
  max-width: 345px;

  @media (max-width: 380px) {
    transform: translate(-0.45rem, -0.45rem) scale(0.95);
  }

  @media (max-width: 370px) {
    transform: translate(-0.8rem, -0.8rem) scale(0.9);
  }

  @media (max-width: 360px) {
    transform: translate(-0.9rem, -0.9rem) scale(0.9);
  }

  @media (max-width: 350px) {
    transform: translate(-1.2rem, -1.2rem) scale(0.85);
  }
`;

export const puzzle1 = styled.img`
  position: absolute;
`;

export const puzzle2 = styled.img`
  position: absolute;
  top: 0;
  left: 7.0155em;
`;

export const puzzle3 = styled.img`
  position: absolute;
  top: 0;
  left: 12.89em;
`;

export const puzzle4 = styled.img`
  position: absolute;
  top: 5.69em;
  left: 0;
`;

export const puzzle5 = styled.img`
  position: absolute;
  top: 7.0549em;
  left: 5.7em;
`;

export const puzzle6 = styled.img`
  position: absolute;
  top: 5.68em;
  left: 14.2em;
`;

export const puzzle7 = styled.img`
  position: absolute;
  top: 14.21em;
  left: 0;
`;

export const puzzle8 = styled.img`
  position: absolute;
  top: 12.88em;
  left: 7.038em;
`;

export const puzzle9 = styled.img`
  position: absolute;
  top: 14.2em;
  left: 12.87em;
`;

export const celebration = styled.div`
  margin-bottom: 39px;

  @media (max-height: 750px) {
    margin-bottom: 20px;
  }
`;

export const semibold20 = styled.div`
  color: ${palette.grayscale.black};
  font-weight: 600;
  font-size: 20px;
`;

export const regular14 = styled.div`
  color: ${palette.grayscale.text33};
  font-weight: 400;
  font-size: 14px;
`;

export const bold14 = styled.div`
  color: ${palette.grayscale.black};
  font-weight: 700;
  font-size: 14px;
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
  display: flex;
  flex-direction: row;
`;

export const purpleRegular14 = styled.div`
  color: ${palette.mainPurple};
  font-weight: 400;
  font-size: 14px;
  margin-left: 2px;
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

export const endButton = styled.div`
  margin-bottom: 33px;
`;

export const loginFailed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px 0;
`;

export const loginFailedInfo = styled.div`
  color: ${palette.system.alert};
  font-size: 14px;
  font-weight: 400;
`;
