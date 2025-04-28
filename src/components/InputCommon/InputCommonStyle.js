import styled from 'styled-components';
import palette from '@styles/theme';

export const InputContainer = styled.div`
  padding: ${(props) => (props.height === '48px' ? '0px 16px' : '0px 25px')}; 
  width: 100%;
  box-sizing: border-box;
`

export const InputCommon = styled.input`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: ${(props) => props.height};

  padding: ${(props) => (props.height === '48px' ? '15px 17px' : '17px 26px')};

  border-radius: ${(props) => (props.height === '48px' ? '24px' : '88px')};
  border: ${(props) => (props.height === '48px' ? `1px solid ${palette.grayscale.black}` : 'none')};
  background: ${palette.grayscale.white};
  outline: none;

  font-family: Pretendard;
  font-size: ${(props) => (props.height === '48px' ? '14px' : '16px')};
  font-style: normal;
  font-weight: ${(props) => (props.height === '48px' ? '400' : '500')};
  line-height: 140%;
  letter-spacing: -0.35px;

  &::placeholder {
    color: ${palette.grayscale.text88};

    font-family: Pretendard;
    font-size: inherit; 
    font-weight: inherit;
    line-height: inherit;
    letter-spacing: -0.35px;
  }
`