import styled from 'styled-components';
import palette from '@styles/theme';

export const FoodCard = styled.div`
  border-bottom: 1px solid ${palette.grayscale.df};
  padding: 16px 0;
  margin: 0 20px;

  &:first-child {
    border-top: 1px solid ${palette.grayscale.df};
  }
`;

export const BoothName = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  margin: 0 3px 12px;
`;

export const BoothTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background-color: ${palette.grayscale.ef};
  display: flex;
  padding: 6px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  border-radius: 16px;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const MenuLine = styled.div`
  display: flex;
  color: ${palette.grayscale.text33};
  text-align: justify;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;

  margin: 0 3px 12px;
  justify-content: space-between;
`;

export const Menu = styled.div`
  display: flex;
`;

export const Price = styled.div`
  display: flex;
`;
//
