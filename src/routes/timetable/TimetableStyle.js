import styled from 'styled-components';
import palette from '@styles/theme';

export const TimeTableContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const TimeTable = styled.div`
  width: 100%;
  box-sizing: border-box;
  max-width: 1200px; // 필요 시 최대 너비 지정
  margin: 0 auto; // 가운데 정렬 (max-width 있을 때)
  padding: 30px 24px;
  max-height: 100vh;
  display: block;
`;
