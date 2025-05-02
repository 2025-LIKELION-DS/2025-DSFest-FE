import styled from 'styled-components';
import palette from '@styles/theme';

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0 25px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  color: ${palette.grayscale.black};
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
`;

export const CopyIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const QRBackground = styled.div`
  width: 150px;
  height: 150px;
  background-color: ${palette.grayscale.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;
