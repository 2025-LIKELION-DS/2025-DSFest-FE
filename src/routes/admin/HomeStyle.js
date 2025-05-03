import styled from 'styled-components';
// import palette from '@styles/theme';

export const Home = styled.div`
  width: 100%;
  height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 100px;
`;

export const Area = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;
  & > div {
    width: calc(100% - 50px);
  }
`;
