import styled from 'styled-components';
import palette from '@styles/theme';

export const PuzzleContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  cursor: pointer;
`;

export const DeleteButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: 100%;
  aspect-ratio: 1 / 1;
  background-color: ${palette.system.alert};

  color: ${palette.grayscale.white};
  font-size: 20px;
  font-weight: 600;
  letter-spacing: -0.5px;
`;

export const ItemContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 0 41px;

  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 23px;
`;

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;

  color: ${palette.grayscale.black};
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
`;

export const CircleIcon = styled.img`
  width: 3px;
  height: 3px;
`;

export const RightContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const DownIcon = styled.img`
  width: 17px;
  height: auto;
  cursor: pointer;
  pointer-events: auto;
  z-index: 100;
`;

export const SendIcon = styled.img`
  width: 18px;
  height: 18px;
  cursor: pointer;
  pointer-events: auto;
  z-index: 100;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const CopyContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 9px 12px;
  border-radius: 10px;
  background-color: ${palette.grayscale.ef};

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: ${palette.grayscale.text33};
  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
`;

export const CopyIconWrapper = styled.div`
  pointer-events: auto;
  z-index: 100;
`;

export const CopyIcon = styled.img`
  width: 23px;
  height: auto;
  cursor: pointer;
  pointer-events: auto;
  z-index: 100;
`;

export const QRBackground = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${palette.grayscale.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;
