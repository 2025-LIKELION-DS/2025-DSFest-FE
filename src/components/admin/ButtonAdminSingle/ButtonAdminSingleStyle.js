import styled from 'styled-components';
import palette from '@styles/theme';

export const ButtonContainer = styled.div`
  padding: 0px 25px;
`;
export const ButtonCommon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 56px;
  border-radius: 88px;
  outline: none;

  color: ${(props) =>
    props.color === `${palette.mainPurple}` ? `${palette.grayscale.white}` : `${palette.mainPurple}`};
  border: ${(props) => props.color === `${palette.grayscale.white}` && `1px solid ${palette.mainPurple}`};
  background-color: ${(props) => props.color};

  font-size: 20px;
  font-family: Pretendard;
  font-weight: 600;
  line-height: 130%;
  letter-spacing: -0.6px;
`;
