import styled from 'styled-components';
import palette from '@styles/theme';

export const List = styled.div`
  width: calc(100% - 40px);
  padding: 0 20px;
`;

export const AdminBtnArea = styled.div`
  margin: 20px 0;
`;

export const Contents = styled.div`
  display: flex;
  width: 100%;
  padding: 0 0 20px 0;
  flex-direction: column;
  align-items: flex-start;
  border-top: 1px solid ${palette.grayscale.df};
`;

export const Empty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 60px 0;
`;
