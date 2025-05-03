import styled from 'styled-components';
import palette from '@styles/theme';

export const BoxCon = styled.div.attrs((props) => ({
  style: {
    top: `${props.top}px`,
    height: `${props.height}px`,
    left: `${props.left}px`,
  },
}))`
  position: absolute;
  z-index: 1000;
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  width: 126px;
  display: flex;
  flex-direction: column;
  gap: 4px;

  /* 투명도 배경 설정 */
  background: var(--white-20, rgba(255, 255, 255, 0.2));
  backdrop-filter: blur(2px);
  -webkit-backdrop-filter: blur(2px); /* Safari 지원 */

  /* 조건부 렌더링 */
  border-left: 5px solid ${(props) => props.borderColor || palette.violet.violet200};
  padding: ${(props) => (props.compact ? '0 0 0 8px' : '8px 0 0 13px')};
  justify-content: ${(props) => (props.compact ? 'center' : 'flex-start')};

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
