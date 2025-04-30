import styled from 'styled-components';
import palette from '@styles/theme';

export const QRImageContainer = styled.div`
  width: 360px;
  height: 450px;
  background-color: ${palette.grayscale.white};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 28px 31px 18px;

  display: flex;
  flex-direction: column;
`;

export const TitleNum = styled.div`
  display: flex;
  align-items: baseline;
  gap: 4px;
`;

export const TitlePurple = styled.div`
  color: ${palette.mainPurple};
  font-size: 32px;
  font-weight: 700;
  line-height: ${(props) => props.lineHeight};
  letter-spacing: -0.8px;
`;

export const TitleText = styled.div`
  color: ${palette.grayscale.text33};
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.4px;
  padding-bottom: 4px;
`;

export const QRBackground = styled.div`
  width: 200px;
  height: 200px;
  background-color: ${palette.grayscale.white};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PWContainer = styled.div`
  padding: 34px 39px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 88px;
  background-color: ${palette.grayscale.ef};

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${palette.grayscale.text33};
  font-size: 20px;
  font-weight: 500;
  line-height: 140%;
`;
