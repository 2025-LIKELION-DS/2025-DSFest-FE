import styled from 'styled-components';
import palette from '@styles/theme';

export const BoothCard = styled.div`
  border-bottom: 1px solid ${palette.grayscale.df};
  padding: 16px 0;
  margin: 0 20px;

  &:first-child {
    border-top: 1px solid ${palette.grayscale.df};
  }
`;

export const BoothName = styled.p`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
  margin: 0 0 8px;
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

  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.3px;
`;
