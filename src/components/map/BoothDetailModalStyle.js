import styled from 'styled-components';
import palette from '@styles/theme';

export const DetailModal = styled.div`
  z-index: 10;
  animation: fadeIn 0.2s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: ${palette.grayscale.white};
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 24px 20px;
`;

export const Link = styled.a`
  color: #89a6ff;
  text-align: justify;

  font-family: Pretendard;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.3px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 16px;
`;

export const Detail = styled.p`
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 0 0 12px 3px;

  color: ${palette.grayscale.text33});
  text-align: justify;

  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.35px;
`;

export const BoothName = styled.p`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: -0.4px;
  margin: 0 3px 12px;
`;

export const BoothTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  margin: 12px 0 0;
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
  font-weight: 600;
  letter-spacing: -0.3px;
`;
