import styled from 'styled-components';
import palette from '@styles/theme';
import { useEffect, useRef, useState } from 'react';

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

  /* ease-in 추가 */
  transform: translateY(10px);
  transition:
    top 0.3s ease-in,
    left 0.3s ease-in,
    width 0.3s ease-in,
    //opacity 1s ease-in, 적용되는 게 하나 밖에 없어서 일단 주석
    transform 1s ease-in;

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;
const TimeLineScheduleBox = ({ top, left, width, label, color }) => {
  const boxRef = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const [translateY, setTranslateY] = useState(10);

  useEffect(() => {
    const handleScroll = () => {
      if (!boxRef.current) return;
      const rect = boxRef.current.getBoundingClientRect();
      const centerY = window.innerHeight / 2;
      const boxCenterY = rect.top + rect.height / 2;
      const distance = Math.abs(centerY - boxCenterY);
      const maxDistance = centerY;

      const ratio = Math.max(0, 1 - distance / maxDistance); // 1에 가까울수록 중앙에 있음
      const safeOpacity = Math.max(ratio, 1); // 최소 0.3 이상
      const translateY = (1 - ratio) * 10;

      setOpacity(safeOpacity);
      setTranslateY(translateY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <ScheduleBox
      ref={boxRef}
      style={{
        opacity,
        transform: `translateY(${translateY}px)`,
      }}
      top={top}
      left={left}
      width={width}
      color={color}>
      {label}
    </ScheduleBox>
  );
};

export default TimeLineScheduleBox;
