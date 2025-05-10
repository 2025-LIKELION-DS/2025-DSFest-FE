import styled, { keyframes } from 'styled-components';
import palette from '@styles/theme';

const ToastShow = keyframes`
  0%{
    transform: scaleX(0);
    opacity: 0;
  }
  15%{
    transform: scaleX(1);
    opacity: 1;
  }
  85%{
    transform: scaleX(1);
    opacity: 1;
  }
  100%{
    transform: scaleX(0);
    opacity: 0;
  }
`;

export const ToastMsg = styled.div`
  padding: 0 40px;
  box-sizing: border-box;
  text-align: center;

  animation: ${ToastShow} 3s ease-in-out forwards;
  transform-origin: center;

  position: absolute;
  top: 38px;

  width: 100%;
  z-index: 999;
`;

export const MsgDiv = styled.div`
  box-sizing: border-box;
  width: 100%;

  padding: 13px 0;

  border-radius: 40px;
  background-color: ${palette.styles.white50};
  box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);

  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.4px;

  white-space: nowrap;
  overflow: hidden;
`;

export const BoothName = styled.span`
  color: #4e3b86;

  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;

  margin-right: 4px;

  display: inline-block;

  white-space: nowrap;
`;
