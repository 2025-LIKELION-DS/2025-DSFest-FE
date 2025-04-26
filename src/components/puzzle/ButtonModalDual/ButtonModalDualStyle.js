import styled from 'styled-components';
import palette from '@styles/theme';

export const ButtonContainer = styled.div`
  padding: 0px 16px;
  display: flex;
  gap: 12px;
`
export const ButtonCommon = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 151px;
  height: 48px;  
  border-radius: 29px;
  outline: none;

  color: ${(props) => (props.color === `${palette.mainPurple}` ? `${palette.grayscale.white}` : `${palette.mainPurple}`)};
  border: ${(props) => (props.color === `${palette.grayscale.white}` ? `1px solid ${palette.mainPurple}` : "none")};
  background-color: ${(props) => props.color};

  font-size: 16px;
  font-weight: 600;
  line-height: 140%;

  &:hover{
    background-color: ${(props)=> (props.color === `${palette.mainPurple}` ? `${palette.grayscale.white}` : `${palette.mainPurple}`)};
    color: ${(props) => (props.color === `${palette.mainPurple}` ? `${palette.mainPurple}` : `${palette.grayscale.white}`)};
    border: ${(props) => (props.color === `${palette.grayscale.white}` ? `1px solid ${palette.grayscale.white}` : `1px solid ${palette.mainPurple}`)};
  }
`