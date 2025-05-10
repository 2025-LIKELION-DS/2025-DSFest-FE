import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Marker = styled.div`
  position: absolute;
  top: 17.5px;
  left: ${(props) => props.left}px;
  height: 134px;
  width: 2px;
  background-color: black;
  z-index: 10;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -4px;
    width: 10px;
    height: 10px;
    background: black;
    border-radius: 50%;
  }
`;

export function getLeftFromTime(timeStr, startHour = 7, gapPerHalfHour = 45, startLeft = 21.5) {
  const [hour, minute] = timeStr.split(':').map(Number);
  const totalMinutes = (hour === 0 ? 24 : hour) * 60 + minute - startHour * 60;
  const adjustedMinutes = Math.round(totalMinutes / 5) * 5;
  const pxPerMinute = gapPerHalfHour / 30;
  return startLeft + adjustedMinutes * pxPerMinute;
}

const TLMarker = ({ onUpdate }) => {
  const [left, setLeft] = useState(() => {
    const now = new Date();
    const hh = String(now.getHours()).padStart(2, '0');
    const mm = String(now.getMinutes()).padStart(2, '0');
    return getLeftFromTime(`${hh}:${mm}`);
  });

  useEffect(() => {
    const updateLeft = () => {
      const now = new Date();
      const hh = String(now.getHours()).padStart(2, '0');
      const mm = String(now.getMinutes()).padStart(2, '0');
      const timeStr = `${hh}:${mm}`;
      const newLeft = getLeftFromTime(timeStr);
      setLeft(newLeft);
      onUpdate?.(newLeft);
    };

    updateLeft(); // 초기 실행
    const interval = setInterval(updateLeft, 5 * 60 * 1000); // 5분마다 업데이트
    return () => clearInterval(interval);
  }, [onUpdate]);

  return <Marker left={left} />;
};

export default TLMarker;
