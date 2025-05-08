import styled from 'styled-components';
import palette from '@styles/theme';

import backgroundImg from '@assets/puzzle/camera-background.svg';

export const video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
`;
export const background = styled.div`
  width: 100%;
  height: calc(100% - 56px);
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const qrImg = styled.img`
  width: 40px;
  height: 40px;
`;

export const whiteRegular20 = styled.div`
  font-weight: 700;
  color: ${palette.grayscale.white};
  font-size: 20px;
`;

export const whiteBold20 = styled.span`
  font-weight: 400;
  color: ${palette.grayscale.white};
  font-size: 20px;
`;

export const qrInfo = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 52px;
`;

export const videoBox = styled.div`
  position: relative;
  width: 80%;
  height: 60svh;
  border-radius: 10px;
`;

export const corner = styled.div`
  width: 20px;
  height: 20px;
  border: 3px solid white;
  position: absolute;
  z-index: 2;

  &.top-left {
    top: 0;
    left: 0;
    border-right: none;
    border-bottom: none;
    border-top-left-radius: 10px;
  }

  &.top-right {
    top: 0;
    right: 0;
    border-left: none;
    border-bottom: none;
    border-top-right-radius: 10px;
  }

  &.bottom-left {
    bottom: 0;
    left: 0;
    border-top: none;
    border-right: none;
    border-bottom-left-radius: 10px;
  }

  &.bottom-right {
    bottom: 0;
    right: 0;
    border-top: none;
    border-left: none;
    border-bottom-right-radius: 10px;
  }
`;
