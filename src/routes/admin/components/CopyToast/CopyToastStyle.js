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

export const ToastContainer = styled.div`
  padding: 0 56px;
  box-sizing: border-box;

  animation: ${ToastShow} 1.5s ease-in-out forwards;
  transform-origin: center;

  position: ${(props) => props.position};
  bottom: 36px;

  width: 100%;
  z-index: 999;

  @media (max-height: 830px) {
    position: sticky;
  }
`;

export const MsgContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 18px 0;
  border-radius: 60px;
  background-color: ${palette.grayscale.white};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;

  color: ${palette.grayscale.black};
  font-size: 17px;
  font-weight: 600;
  line-height: 130%;
`;

export const CheckIcon = styled.img`
  width: 20px;
  height: 20px;
`;
