import { useRef, useState, useEffect } from 'react';
import * as L from '@components/TimeTable/TimeLineStyle.js';
import Button from '@components/TimeTable/img/Button.svg';
import TimeLineGrid from '@components/TimeTable/TLGrid';
import TLMarker from '@components/TimeTable/TLMarker';
import TimeLineScheduleBox from '@components/TimeTable/TLSchedule';
import scheduleData from '@components/TimeTable/ScheduleData';
import Lock from '@components/TimeTable/img/Lock.svg';

const TimeLineHeader = ({ selectedDate }) => {
  const scrollRef = useRef(null);
  const [markerLeft, setMarkerLeft] = useState(null); // 마커 위치 처음에는 null로

  //마커 스크롤 하다가 Button 클릭 시 -> 현재 시간 중앙 정렬
  const handleScrollToMarker = () => {
    if (scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const centerOffset = scrollContainer.clientWidth / 2;
      scrollContainer.scrollTo({
        left: markerLeft - centerOffset,
        behavior: 'smooth', //부드럽게 움직이도록
      });
    }
  };

  // 마커 위치 현재 시간으로 잡히자마자 타임라인 중앙 정렬
  useEffect(() => {
    if (markerLeft !== null && scrollRef.current) {
      const scrollContainer = scrollRef.current;
      const centerOffset = scrollContainer.clientWidth / 2;
      scrollContainer.scrollTo({
        left: markerLeft - centerOffset,
        behavior: 'smooth', //9시(처음)에서 현재 시각으로 부드럽게 움직이도록
      });
    }
  }, [markerLeft]);

  //축제 기간 아닐 때 잠근 오버레이
  const isFestivalTime = () => {
    const now = new Date();

    const start = new Date('2025-05-14T09:30:00');
    const end = new Date('2025-05-16T23:00:00');

    return now >= start && now <= end;
  };

  return (
    <L.LineHeader>
      <L.HeaderCon>
        <L.TimeLine>
          타임라인
          <L.Time>09:30 - 23:00</L.Time>
        </L.TimeLine>
        <L.Button onClick={handleScrollToMarker}>
          <img src={Button} />
        </L.Button>
      </L.HeaderCon>

      <L.ScrollCon style={{ position: 'relative' }}>
        <L.TimeLineGridWrapper ref={scrollRef}>
          <TimeLineGrid />
          {/* TLMarker 렌더링 */}
          <TLMarker onUpdate={setMarkerLeft} />
          {/* Schedule box 렌더링 */}
          {selectedDate && scheduleData[selectedDate]?.map((item, idx) => <TimeLineScheduleBox key={idx} {...item} />)}
        </L.TimeLineGridWrapper>

        {!isFestivalTime() && (
          <L.LockOverlay>
            <img src={Lock} alt="Lock" />
            <span>축제 운영 시간이 아닙니다.</span>
            <small>5/14(수) - 5/16(금)</small>
            <small>09:30 - 23:00</small>
          </L.LockOverlay>
        )}
      </L.ScrollCon>
    </L.LineHeader>
  );
};

export default TimeLineHeader;
