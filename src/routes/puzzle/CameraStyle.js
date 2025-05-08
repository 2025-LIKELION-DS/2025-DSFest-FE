import styled from 'styled-components';
import palette from '@styles/theme';

import backgroundImg from '@assets/puzzle/camera-background.svg';

export const video = styled.video`
  width: 80%;
  height: 60svh;
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
