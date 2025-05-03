import styled from 'styled-components';
import palette from '@styles/theme';

export const Header = styled.div`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0px 20px;
  background-color: ${palette.grayscale.text33};
  z-index: 999;
  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    width: 393px;
  }
`;

export const Close = styled.img`
  width: 24px;
  cursor: pointer;
`;

export const Empty = styled.div`
  width: 24px;
  height: 24px;
`;

export const Pages = styled.div`
  color: ${palette.grayscale.white};
  font-family: Pretendard;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 132%;
  letter-spacing: -0.45px;
`;
