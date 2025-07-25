import styled from 'styled-components';
import palette from '@styles/theme';

export const Message = styled.div`
  width: fit-content;
  padding: 12px;
  border-radius: 12px;
  background: ${palette.mainPurple10};
  color: ${palette.grayscale.text33};
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;
  white-space: pre-wrap;
  margin-bottom: 16px;
  max-height: 999999px; /* 안드로이드 크롬 폰트 사이즈 이슈 */
`;

export const Highlight = styled.span`
  color: ${palette.mainPurple};
  text-decoration: underline;
  cursor: pointer;
`;

export const LottieOverlay = styled.div`
  position: absolute;
  bottom: 100px;
  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    @media (min-height: 852px) {
      bottom: calc(50% - 310px);
    }
  }
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  width: ${({ isStill }) => (isStill ? '356px' : '200px')};
  height: 200px;
  border-radius: 16px;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.5);
  filter: drop-shadow(0px 0px 10px rgba(0, 0, 0, 0.25));
  .lf-player-container {
    height: 100%;
  }
`;
