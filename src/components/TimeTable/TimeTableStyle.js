import styled from 'styled-components';
import palette from '@styles/theme';

export const LineContainer = styled.div`
  padding: 0px 25px;
`;

/* 날짜 선택 바 */
export const DateBar = styled.div`
  box-sizing: border-box;
  border-radius: 8px;
  background: ${palette.grayscale.ef};
  display: flex;
  width: 345px;
  padding: 4px;
  align-items: center;
  gap: 4px;
  margin-top: 15px;
`;

/* 시간 리스트 */
export const DateCell = styled.div`
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  height: 32px;
  padding: 4px 21px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex: 1 0 0;
  background: ${palette.grayscale.ef};
  /* text */
  font-size: 14px;
  letter-spacing: -0.35px;
  color: ${palette.grayscale.text88};

  &.selected {
    background-color: ${palette.grayscale.white};
    color: ${palette.grayscale.black};
    font-weight: 600;
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  }
`;

/* 타임테이블 영역 */
export const TimeTable = styled.div`
  display: flex;
  max-height: 370px; //스크롤 영역 높이 설정
  overflow-y: auto;

  scrollbar-width: none;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const TableTimeCon = styled.div`
  display: block;
`;

export const TableTime = styled.div`
  color: ${palette.grayscale.text88};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  margin: 20px 15px 0 15px;
`;

// 타임테이블 시간 표시선 영역
export const TableLineCon = styled.div`
  display: block;
  position: relative;
  z-index: 100;
`;

export const TableLine = styled.div.withConfig({
  shouldForwardProp: (prop) => !['first', 'last'].includes(prop),
})`
  border: 1px solid #ccc;
  border-left: none;
  border-right: none;
  width: 260px;
  height: 35px;
  margin-top: ${(props) => (props.first ? '29px' : '37px')};
  border-bottom: ${(props) => (props.last ? 'none' : '1px solid #ccc')};
`;

/* 장소 정보 */
export const SpaceInfo = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`;
export const SpaceBox = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  margin-top: 17.5px;
  color: ${palette.grayscale.text88};
`;

export const Circle = styled.div`
  box-sizing: border-box;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  background-color: ${(props) => (props.booth ? palette.puzzle.violet : palette.violet.violet200)};
  /* 일심덕체 추가 */
  &.ilsimdukche {
    background-color: ${palette.puzzle.default};
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
