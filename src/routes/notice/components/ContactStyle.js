import styled from 'styled-components';
import palette from '@styles/theme';

export const Contact = styled.div`
  display: flex;
  width: calc(100% - 40px);
  padding: 16px 20px;
  margin: 20px 0;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  border-radius: 12px;
  background: ${palette.mainPurple10};
`;

export const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  row-gap: 4px;
  align-self: stretch;
  flex-wrap: wrap;
`;

export const Bottom = styled.div`
  color: ${palette.grayscale.text88};
  font-family: Pretendard;
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.25px;
`;

export const Title = styled.div`
  color: ${palette.grayscale.text33};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.35px;
`;

export const Btn = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 28px;
  border: 1px solid ${palette.grayscale.white80};
  background: ${palette.styles.white50};
  backdrop-filter: blur(2px);
  & img {
    width: 11px;
    height: 10px;
  }
`;

export const BtnText = styled.div`
  color: ${palette.grayscale.text33};
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;
