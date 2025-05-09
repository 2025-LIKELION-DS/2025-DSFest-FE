import styled from 'styled-components';
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
  /* overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  } */
`;

export const Area = styled.div`
  position: fixed;
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
  margin: auto;
  color: #aaa;
  font-size: 14px;
  text-align: center;
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
