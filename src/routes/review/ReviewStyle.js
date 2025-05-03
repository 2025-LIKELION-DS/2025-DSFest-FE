import styled from 'styled-components';
import palette from '@styles/theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 56px);
`;

export const Review = styled.div`
  width: calc(100% - 40px);
  padding: 20px 20px;
  flex: 1;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 16px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Area = styled.div`
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
  min-height: 24px;
  max-height: 140px;
  padding: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: ${palette.grayscale.ef};
  & textarea {
    width: 100%;
    height: 100%;
    border: none;
    background: none;
    padding: 0;
    color: ${palette.grayscale.text33};
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;
    resize: none;
    overflow-y: auto;
    scrollbar-width: none;
  }
  & textarea::placeholder {
    color: ${palette.grayscale.text88};
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;
  }
  & textarea:focus {
    outline: none;
  }
  & textarea::-webkit-scrollbar {
    display: none;
  }
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
