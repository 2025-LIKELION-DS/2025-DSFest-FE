import styled from 'styled-components';
import palette from '@styles/theme';

export const ButtonContainer = styled.div`
  padding: 0px 25px;
`
export const ButtonCommon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 48px;  
  border-radius: 20px;
  outline: none;

  color: ${palette.grayscale.white};
  background-color: ${(props) => props.color};

  font-size: 16px;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.4px;
`