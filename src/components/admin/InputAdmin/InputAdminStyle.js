import styled from 'styled-components';
import palette from '@styles/theme';

export const InputContainer = styled.div`
  padding: 0px 25px;
`;

export const InputWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;
  height: 48px;

  border-radius: 24px;
  padding: 0px 16px;

  background-color: ${palette.grayscale.ef};
`;

export const Text = styled.div`
  color: ${palette.mainPurple};
  width: 60px;
  flex-shrink: 0;

  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -0.48px;
`;

export const Line = styled.div`
  width: 2px;
  height: 30px;
  background-color: ${palette.mainPurple};
  align-self: center;
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.48px;

  background-color: ${palette.grayscale.ef};

  &::placeholder {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: -0.48px;
  }
`;
