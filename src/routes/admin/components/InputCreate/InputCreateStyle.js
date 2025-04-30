import styled from 'styled-components';
import palette from '@styles/theme';

export const InputContainer = styled.div`
  padding: 0px 25px;
  width: 100%;
  box-sizing: border-box;
`;

export const InputWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;

  width: 100%;
  height: 56px;

  border-radius: 88px;
  padding: 0px 26px;

  background-color: ${palette.grayscale.ef};
`;

export const Input = styled.input`
  outline: none;
  border: none;
  width: 100%;

  font-family: Pretendard;
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
