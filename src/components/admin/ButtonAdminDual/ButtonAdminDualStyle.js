import styled from 'styled-components';
import palette from '@styles/theme';

export const ButtonContainer = styled.div`
  padding: 0px 25px;
  display: flex;
  gap: 20px;
`
export const ButtonCommon = styled.button`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;

  width: 161px;
  height: 56px;  
  border-radius: 88px;
  outline: none;

  color: ${(props) => (props.color === `${palette.mainPurple}` ? `${palette.grayscale.white}` : `${palette.mainPurple}`)};
  border: ${(props) => (props.color === `${palette.grayscale.white}` ? `1px solid ${palette.mainPurple}` : `1px solid ${palette.grayscale.white}`)};
  background-color: ${(props) => props.color};

  font-size: 20px;
  font-weight: 600;
  line-height: 130%; /* 26px */
  letter-spacing: -0.6px;

  >img{
    width: 22px;
    height: 22px;
    object-fit: contain;
  }

  svg{
    fill: currentColor;
  }

  &:hover{
    background-color: ${(props) => (props.color === `${palette.mainPurple}` ? `${palette.grayscale.white}` : `${palette.mainPurple}`)};
    color: ${(props) => (props.color === `${palette.mainPurple}` ? `${palette.mainPurple}` : `${palette.grayscale.white}`)};
    border: ${(props) => (props.color === `${palette.grayscale.white}` ? `1px solid ${palette.grayscale.white}` : `1px solid ${palette.mainPurple}`)};
  }
`