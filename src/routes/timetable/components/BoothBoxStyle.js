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
  gap: 2px;

  /* 투명도 배경 설정 */
  background: ${palette.styles.white20};
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px); /* Safari 지원 */

  /* 조건부 렌더링 */
  border-left: 5px solid ${(props) => props.borderColor || palette.violet.violet200};
  padding: ${({ compact, special }) => (special ? '1px 0 0 12px' : compact ? '1px 0 0 12px' : '8px 0 0 12px')};
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
    /* font-size: clamp(11px, 2vw, 14px); */
    font-size: 14px;
    font-weight: 600;
    margin-right: 5px;
    ${(props) => props.special && `margin-right: 0px;`}

    @media (max-width: 389px) {
      font-size: 13.5px !important;
    }
    @media (max-width: 379px) {
      font-size: 13x !important;
    }
    @media (max-width: 379px) {
      font-size: 12.5px !important;
    }
    @media (max-width: 360px) {
      font-size: 12px !important;
    }

    @media (max-width: 353px) {
      font-size: 11px !important;
    }
    @media (max-width: 336px) {
      font-size: 10.5px !important;
    }
    @media (max-width: 328px) {
      font-size: 10px !important;
    }
    @media (max-width: 320px) {
      font-size: 9.5px !important;
    }
    @media (max-width: 312px) {
      font-size: 9px !important;
    }
  }

  @media (max-width: 400px) {
    padding-left: 10px !important;
  }
`;

export const Time = styled.div`
  display: flex;
  margin-top: 4px;
  //보라; 보이는 라디오시 마진 없음
  ${(props) => props.special && `margin-top: 0px;`}

  img {
    width: 11px;
    height: 11px;
    margin-right: 2px;
  }
  div {
    color: ${palette.grayscale.text88};
    font-family: Pretendard;
    font-size: 10px;
    font-weight: 400;
    letter-spacing: -0.25px;
    @media (max-width: 362px) {
      ${(props) => props.special && `  font-size: 9px;`}
    }
  }
`;

export const BoothCon = styled.div`
  display: flex;
`;
