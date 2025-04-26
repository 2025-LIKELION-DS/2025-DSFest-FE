import styled from 'styled-components';
import palette from '@styles/theme';

export const InputContainer = styled.div`
  padding: 0px 25px;

  position: relative;

  display: flex;
  align-items: center;
`

export const InputLogin = styled.input`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 48px;

  padding: 13px 20px;

  border-radius: 20px;
  background: ${palette.grayscale.ef};
  outline: none;
  border: none;

  color: ${palette.grayscale.text33};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.35px;

  &::placeholder {
    color: ${palette.grayscale.text88};

    font-family: Pretendard;
    font-size: 14px;
    font-weight: 400;
    line-height: 140%;
    letter-spacing: -0.35px;
  }
`

export const PwdIcon = styled.img`
  position: absolute;
  right: 40px;

  cursor: pointer;
`

export const PwdClose = styled.img`
  position: absolute;
  right: 64px;

  cursor: pointer;
  `