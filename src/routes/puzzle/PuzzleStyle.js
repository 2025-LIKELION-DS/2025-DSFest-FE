import styled from 'styled-components';
import palette from '@styles/theme';

import emptyPuzzleImg from '@assets/puzzle/empty_puzzle.png';
import successPuzzleImg from '@assets/puzzle/completed_puzzle.png';

export const puzzlePage = styled.div`
  min-height: calc(100% - 56px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 46px;

  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    @media (min-height: 852px) {
      position: relative;
    }
  }
`;

export const currentPuzzleInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 46px;
`;

export const TopContainer = styled.div``;

export const top = styled.div`
  margin: 34px 0 24px 28px;
`;

export const puzzleInfo1 = styled.div`
  color: ${palette.grayscale.text33};
  font-weight: 400;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const puzzleInfo2 = styled.div`
  color: ${palette.grayscale.text33};
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const goMap = styled.button`
  height: 31px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  padding: 4px 10px;
  border-radius: 16px;
  background: ${palette.grayscale.white};
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
  margin: 0 25px;
`;

export const presentInfo = styled.div`
  width: 100%;
  color: ${palette.grayscale.text33};
  font-weight: 400;
  font-size: 14px;
  display: flex;
  align-items: center;
`;

export const emptyPuzzle = styled.div`
  width: 100%;
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

export const loginInfo = styled.div`
  width: 100%;
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
  justify-content: space-between;
  padding: 0 25px;
`;

export const todoPuzzle = styled.div`
  display: flex;
  align-items: center;
`;

export const completedPuzzleBox = styled.div`
  border-radius: 15px;
  background: ${palette.grayscale.white};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);
  margin: 12px 25px;

  display: flex;
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
  position: relative;
  left: 20px;
`;

export const CompletedInfo = styled.div`
  width: calc(100% - 34px);
  border-radius: 14px;
  background-color: ${palette.grayscale.ef};
  padding: 18px 17px 28px;
  margin-top: 23px;

  @media (max-height: 800px) {
    margin-bottom: 20px;
  }
`;

export const whiteErrorIcon = styled.img`
  margin-bottom: 6px;
`;

export const successPuzzle = styled.div`
  background-image: url(${successPuzzleImg});
  width: 100%;
  aspect-ratio: 1;

  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const alreadySuccessInfo = styled.div`
  width: 100%;

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
`;

export const puzzleGrid = styled.div`
  width: 100%;
  height: auto;
  aspect-ratio: 1 / 1;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

export const puzzle1 = styled.img`
  width: calc(100% / 0.826);
  height: auto;
  aspect-ratio: 139.093 / 117.981;
`;

export const puzzle2 = styled.img`
  width: calc(100% / 0.948);
  height: auto;
  aspect-ratio: 121.209 / 138.927;
  margin-left: -3%;
`;

export const puzzle3 = styled.img`
  width: calc(100% / 0.826);
  height: auto;
  aspect-ratio: 139.093 / 117.981;
  margin-left: -21%;
`;

export const puzzle4 = styled.img`
  width: calc(100% / 0.972);
  height: auto;
  aspect-ratio: 118.229 / 162.937;
  margin-top: -42%;
`;

export const puzzle5 = styled.img`
  width: calc(100% / 0.705);
  height: auto;
  aspect-ratio: 163.103 / 121.127;
  margin-top: -24%;
  margin-left: -21%;
`;

export const puzzle6 = styled.img`
  width: calc(100% / 0.972);
  height: auto;
  aspect-ratio: 118.229 / 162.937;
  margin-top: -42%;
  margin-left: -2.8%;
`;

export const puzzle7 = styled.img`
  width: calc(100% / 0.825);
  height: auto;
  aspect-ratio: 139.341 / 118.56;
  margin-top: -24%;
`;

export const puzzle8 = styled.img`
  width: calc(100% / 0.948);
  height: auto;
  aspect-ratio: 121.209 / 139.59;
  margin-top: -42.2%;
  margin-left: -2.7%;
`;

export const puzzle9 = styled.img`
  width: calc(100% / 0.826);
  height: auto;
  aspect-ratio: 139.093 / 118.643;
  margin-top: -24%;
  margin-left: -21%;
`;

export const celebration = styled.div`
  margin-bottom: 39px;
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

export const bold14 = styled.span`
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
`;

export const purpleRegular14 = styled.div`
  color: ${palette.mainPurple};
  font-weight: 400;
  font-size: 14px;
  margin-left: 2.5px;
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

export const endButton = styled.div`
  margin-bottom: 33px;
`;

export const modal = styled.div`
  display: flex;
  justify-content: center;
`;
