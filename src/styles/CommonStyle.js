import styled from 'styled-components';
import palette from '@styles/theme';
import backImg from '@assets/responsive/pc-background.png';

export const Page = styled.div`
  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    width: 100vw;
    height: 100dvh;
    box-sizing: border-box;
    padding: 100px 86px;
    background-image: url(${backImg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow-y: hidden;
    overflow-x: hidden;

    display: flex;
    justify-content: center;
    align-items: center;

    @media (min-width: 1301px) {
      justify-content: space-between;
    }
    @media (min-height: 852px) {
      position: relative;
    }
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  width: 280px;
  height: 100%;
  align-items: flex-start;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const YeounLeft = styled.img`
  width: 133px;
  height: auto;
`;

export const RightContainer = styled.div`
  display: flex;
  width: 280px;
  height: 100%;
  align-items: flex-end;

  @media (max-width: 1300px) {
    display: none;
  }
`;

export const YeounRight = styled.img`
  width: 280px;
  height: auto;
`;

export const Phone = styled.div`
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
  height: 100dvh;

  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    width: 393px;
    background-color: ${palette.grayscale.white};

    @media (min-height: 852px) {
      height: 852px;
      border: 12px solid ${palette.grayscale.black};
      border-radius: 24px;
      box-shadow: 0 0 40px 0 rgba(0, 0, 0, 0.25);
    }
  }
`;
