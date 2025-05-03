import styled from 'styled-components';
import palette from '@styles/theme';

export const Image = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  min-height: calc(100% - 56px);
  background-color: ${palette.grayscale.text33};
`;

export const ImageDetail = styled.div``;
