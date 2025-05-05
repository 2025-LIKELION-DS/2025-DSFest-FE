import styled from 'styled-components';
import palette from '@styles/theme';

const ScheduleBox = styled.div`
  position: absolute;
  /*타임라인 스케쥴 박스 위치 전달 */
  top: ${(props) => props.top}px;
  left: ${(props) => props.left}px;
  width: ${(props) => props.width}px;
  height: 48px;
  border-radius: 10px;
  background-color: ${(props) => props.color};
  color: ${palette.grayscale.white};
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
  /* 연예인 공연 박스만 중앙정렬 / 나머지 모두 좌측정렬 + 마진 */
  justify-content: ${(props) => (props.width <= 45 ? 'center' : 'flex-start')};
  text-align: ${(props) => (props.width <= 45 ? 'center' : 'left')};
  padding-left: ${(props) => (props.width <= 45 ? '0' : '17.5px')};
  white-space: ${(props) => (props.width <= 90 ? 'pre-line' : 'nowrap')};
  box-sizing: border-box; //박스 사이즈 고정
  z-index: 2;
`;

const TimeLineScheduleBox = ({ top, left, width, label, color }) => {
  return (
    <ScheduleBox top={top} left={left} width={width} color={color}>
      {label}
    </ScheduleBox>
  );
};

export default TimeLineScheduleBox;
