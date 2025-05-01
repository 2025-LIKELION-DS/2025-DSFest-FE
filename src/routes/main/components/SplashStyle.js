import styled from 'styled-components';
import palette from '@styles/theme';

export const Splash = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;

  background: ${palette.grayscale.black50};
  backdrop-filter: blur(5px);

  position: absolute;
  z-index: 1000;

  display: flex;
  flex-direction: column;
`;

export const CloseImg = styled.img`
  cursor: pointer;

  position: absolute;
  top: 16px;
  right: 20px;
`;

export const ImgDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 22.5px;
`;

export const LogoImg = styled.img`
  margin: 0 auto;
  margin-top: 23.71vh;
`;

export const ArrowImg = styled.img`
  margin-top: 28.5px;
`;

export const Text = styled.p`
  color: ${palette.grayscale.white};
  text-align: center;

  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.5px;

  span {
    color: ${palette.violet.violet100};

    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.5px;
  }
`;
