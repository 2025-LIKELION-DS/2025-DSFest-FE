import styled, { keyframes } from 'styled-components';
import palette from '@styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 56px);
`;

export const Review = styled.div`
  width: calc(100% - 40px);
  padding: 20px 20px 76px;
  flex: 1;
`;

export const Area = styled.div`
  position: absolute;
  bottom: 0;
  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    width: 369px;
    @media (min-height: 852px) {
      bottom: calc(50% - 426px);
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
    }
  }
  display: flex;
  width: calc(100% - 24px);
  padding: 12px;
  align-items: flex-end;
  gap: 8px;
  background: ${palette.grayscale.white};
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);
`;

export const Input = styled.div`
  width: calc(100% - 56px);
  padding: 13.5px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${palette.grayscale.ef};
`;

export const Button = styled.div`
  border-radius: 12px;
  background: ${({ $active }) => ($active ? palette.mainPurple : palette.grayscale.ef)};
  width: 24px;
  height: 24px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Empty = styled.div`
  color: #aaa;
  font-size: 14px;
  width: 100%;
  height: calc(100dvh - 56px - 72px);
  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    @media (min-height: 852px) {
      height: calc(852px - 56px - 72px);
    }
  }
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 21px;
  max-height: 140px;
  overflow-y: auto;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Highlighter = styled.div`
  max-height: 100%;
  white-space: pre-wrap;
  word-break: break-word;
  pointer-events: none;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;
  z-index: 5;
  background: transparent;

  .normal-text {
    color: ${palette.grayscale.text33};
    text-decoration: unset;
  }

  span {
    color: ${palette.mainPurple};
    text-decoration: underline;
  }
`;

export const StyledTextarea = styled.textarea`
  padding: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
  border: none;
  background: none;
  caret-color: ${palette.grayscale.text33};
  font-size: 14px;
  line-height: 1.5;
  outline: none;
  resize: none;
  overflow-y: hidden;
  scrollbar-width: none;
  color: transparent;
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;
  &::placeholder {
    color: ${palette.grayscale.text88};
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;
  }
  &:focus {
    outline: none;
  }
`;

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

export const ToastBox = styled.div`
  box-sizing: border-box;
  width: 100%;
  animation: ${ToastShow} 1.5s ease-in-out forwards;
  transform-origin: center;
  position: absolute;
  top: 70px;
  left: 0;
  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    @media (min-height: 852px) {
      top: calc(50% - 355px);
    }
  }
  z-index: 999;
  display: flex;
  justify-content: center;
`;

export const ToastContent = styled.div`
  box-sizing: border-box;
  width: calc(100% - 80px);
  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    width: 313px;
    @media (min-height: 852px) {
      width: 313px;
    }
  }
  padding: 17px 20px;
  border-radius: 60px;
  background-color: ${palette.grayscale.white};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 6px;

  color: ${palette.grayscale.black};
  font-size: 17px;
  font-weight: 600;
  line-height: 130%;
`;

export const ToastMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
