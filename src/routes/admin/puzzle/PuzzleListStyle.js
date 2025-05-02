import styled from 'styled-components';
import palette from '@styles/theme';

export const PuzzleList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 33px;
  padding: 33px 0;

  box-sizing: border-box;
  min-height: calc(100% - 56px);
  position: relative;
`;

export const PuzzleItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
