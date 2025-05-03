import { useRef, useState, useEffect } from 'react';
import * as L from '@components/TimeTable/TimeLineStyle.js';
import Button from '@components/TimeTable/img/Button.svg';
import TimeLineGrid from '@components/TimeTable/TLGrid';
import TLMarker from '@components/TimeTable/TLMarker';
import TimeLineScheduleBox from '@components/TimeTable/TLSchedule';
import scheduleData from '@components/TimeTable/ScheduleData';

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
      <L.ScrollCon>
        <L.TimeLineGridWrapper ref={scrollRef}>
          <TimeLineGrid />
          {/* TLMarker 렌더링 */}
          <TLMarker onUpdate={setMarkerLeft} />

          {/* Schedule box 렌더링 */}
          {selectedDate && scheduleData[selectedDate]?.map((item, idx) => <TimeLineScheduleBox key={idx} {...item} />)}
        </L.TimeLineGridWrapper>
      </L.ScrollCon>
    </L.LineHeader>
  );
};

export default TimeLineHeader;
