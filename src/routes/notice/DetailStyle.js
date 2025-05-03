import styled from 'styled-components';
import palette from '@styles/theme';

export const Detail = styled.div`
  padding: 28px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Title = styled.div`
  color: ${palette.grayscale.text33};
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 132%;
  letter-spacing: -0.45px;
`;

export const Content = styled.div`
  color: ${palette.grayscale.text33};
  text-align: justify;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

export const Images = styled.div`
  padding: 0 24px 20px;
  display: flex;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Image = styled.img`
  width: 152px;
  height: 190px;
  aspect-ratio: 4/5;
  border-radius: 8px;
`;
