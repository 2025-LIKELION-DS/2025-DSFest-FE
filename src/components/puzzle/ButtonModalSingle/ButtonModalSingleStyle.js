import styled from 'styled-components';
import palette from '@styles/theme';

export const ButtonContainer = styled.div`
  padding: 0px 16px;
`;
export const ButtonCommon = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 48px;
  border-radius: 29px;
  outline: none;

  color: ${palette.grayscale.white};
  background-color: ${palette.mainPurple};

  font-size: 16px;
  font-weight: 600;
  line-height: 140%;

  &:hover {
    background-color: ${palette.darkPurple};
  }

  transition: background-color 0.3s ease;
`;
