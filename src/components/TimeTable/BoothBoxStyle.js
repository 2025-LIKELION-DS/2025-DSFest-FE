import styled, { keyframes, css } from 'styled-components';
import palette from '@styles/theme';

// 타임테이블이 아래에서 위로 올라오는 애니메이션
const slideUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const BoxCon = styled.div.attrs((props) => ({
  style: {
    top: `${props.top}px`,
    height: `${props.height}px`,
    left: `${props.left}%`,
  },
}))`
  position: absolute;
  z-index: 1000;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  width: 48%;
  display: flex;
  flex-direction: column;
  gap: 4px;

  /* 투명도 배경 설정 */
  background: ${palette.styles.white20};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px); /* Safari 지원 */

  /* 조건부 렌더링 */
  border-left: 5px solid ${(props) => props.borderColor || palette.violet.violet200};
  padding: ${({ compact, special }) => (special ? '1px 0 0 8px' : compact ? '0 0 0 8px' : '8px 0 0 13px')};
  justify-content: ${(props) => (props.compact ? 'center' : 'flex-start')};

  /* 아래에서 위로 올라오는 애니메이션 */
  ${({ animate }) =>
    animate &&
    css`
      animation: ${slideUp} 0.8s ease-out forwards;
    `}

  h2 {
    margin: 0;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.35px;
  }
`;

export const Time = styled.div`
  display: flex;
  img {
    width: 11px;
    height: 11px;
    margin-right: 2px;
  }

  div {
    color: ${palette.grayscale.text88};
    font-family: Pretendard;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.25px;
  }
`;

export const BoothCon = styled.div`
  display: flex;
`;
