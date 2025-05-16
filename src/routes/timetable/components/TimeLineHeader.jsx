import { useRef, useState, useEffect } from 'react';
import * as L from '@timetable/components/TimeLineStyle.js';
import TimeLineGrid from '@timetable/components/TLGrid';
import TLMarker from '@timetable/components/TLMarker';
import TimeLineScheduleBox from '@timetable/components/TLSchedule';
import scheduleData from '@timetable/components/ScheduleData';
// 이미지
import Button from '@assets/timetable/Button.png';
import Lock from '@assets/timetable/Lock.svg';

const TimeLineHeader = ({ selectedDate }) => {
  const scrollRef = useRef(null);
  const [markerLeft, setMarkerLeft] = useState(null); // 마커 위치 처음에는 null로

  //easeIn 함수 추가
  const easeIn = (t) => t * t;
  const smoothScrollTo = (element, to, duration = 300) => {
    const start = element.scrollLeft;
    const change = to - start;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeIn(progress); // ease-in 적용

      element.scrollLeft = start + change * ease;

      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };

    requestAnimationFrame(animateScroll);
  };

  //마커 스크롤 하다가 Button 클릭 시 -> 현재 시간 중앙 정렬
  const handleScrollToMarker = () => {
    if (scrollRef.current && markerLeft !== null) {
      const scrollContainer = scrollRef.current;
      const centerOffset = scrollContainer.clientWidth / 2;
      const target = markerLeft - centerOffset;

      //smoothScrollTo 호출
      smoothScrollTo(scrollContainer, target, 200);
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

    // 축제 전체 기간
    const startDate = new Date('2025-05-14T09:30:00');
    const endDate = new Date('2025-05-16T23:00:00');

    // 날짜가 범위 안에 있는지 확인
    const isInDateRange = now >= startDate && now <= endDate;

    if (!isInDateRange) return false;

    // 매일 운영 시간: 09:30 ~ 23:00
    const hour = now.getHours();
    const minute = now.getMinutes();

    const afterOpening = hour > 9 || (hour === 9 && minute >= 30);
    const beforeClosing = hour < 23;

    return afterOpening && beforeClosing;
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
