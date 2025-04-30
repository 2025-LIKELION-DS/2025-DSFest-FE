import { useState, useEffect } from 'react';
import * as M from '@map/MapStyle';
import BoothCard from './BoothCard';
// import booths from './booths.json';
import axios from 'axios';

import mapSmall from '../../assets/map/mapSmall.svg';
import mapBig from '../../assets/map/mapBig.svg';
import toggleDown from '../../assets/map/toggleDown.svg';
import toggleUp from '../../assets/map/toggleUp.svg';
import Minus from '../../assets/map/minus.svg';
import Plus from '../../assets/map/plus.svg';
import MinusB from '../../assets/map/minusblack.svg';
import PlusB from '../../assets/map/plusblack.svg';

import { motion, useDragControls } from 'framer-motion';

function Map() {
  const [isZoomed, setIsZoomed] = useState(false);
  const controls = useDragControls();
  const [panelHeight, setPanelHeight] = useState(window.innerHeight * 0.522);

  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('수요일 낮');
  

  const [booths, setBooths] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const filteredBooths = booths.filter(
    (booth) =>
      Array.isArray(booth.times) &&
      (booth.times.some((t) => t.includes('매일')) || booth.times.includes(selectedDay))
  );

  useEffect(() => {
    axios.get('/booths.json') 
      .then((res) => {
        console.log('👉 res.data:', res.data);
        setBooths(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('부스 데이터 불러오기 실패:', err);
      });
  }, []);

  return (
    <M.Map $bg={isZoomed ? mapBig : mapSmall}>
      {/* 상단 선택 영역 */}
      <M.MapArea>
        <M.ZoomButtonWrapper>
          <M.ZoomButton
            onClick={() => setIsZoomed(false)}
            disabled={!isZoomed}
          >
            <M.Minus src={isZoomed ? MinusB : Minus} alt="-" />
          </M.ZoomButton>

          <M.ZoomButton
            onClick={() => setIsZoomed(true)}
            disabled={isZoomed}
          >
            <M.Plus src={isZoomed ? Plus : PlusB} alt="+" />
          </M.ZoomButton>
        </M.ZoomButtonWrapper>

        <M.DateWrapper onClick={() => setIsDateOpen((prev) => !prev)}>
          <M.DaySelectButton>{selectedDay}</M.DaySelectButton>
          <M.ToggleImage
            src={isDateOpen ? toggleUp : toggleDown}
            alt="토글"
          />
        </M.DateWrapper>

{isDateOpen && (
  <M.DateDropdown>
    {['수요일 낮', '수요일 밤', '목요일 낮', '목요일 밤', '금요일 낮', '금요일 밤'].map((day) => (
      <M.DateOption
        key={day}
        onClick={() => {
          setSelectedDay(day);
          setIsDateOpen(false);
        }}
        style={{
          fontWeight: selectedDay === day ? 600 : 400,
        }}
      >
        {day}
      </M.DateOption>
    ))}
  </M.DateDropdown>
)}
</M.MapArea>

      {/* 드래그 가능한 패널 */}
      <M.SlidingPanel
        drag="y"
        dragConstraints={{ top: 0, bottom: 0 }}
        dragElastic={0}
        animate={{ height: panelHeight }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        onDrag={(e, info) => {
          const deltaY = info.delta.y;
          const newHeight = Math.min(
            window.innerHeight * 0.92,
            Math.max(93, panelHeight - deltaY)
          );
          setPanelHeight(newHeight);
        }}
        onDragEnd={() => {
          console.log('드래그 종료됨, 높이:', panelHeight);
          if (panelHeight > 600) setPanelHeight(window.innerHeight * 0.92);
          else if (panelHeight < 200) setPanelHeight(93);
          else setPanelHeight(window.innerHeight * 0.522);
        }}
      >
        <M.TouchSection
          onPointerDown={(e) => controls.start(e)}
          style={{ cursor: 'grab', paddingTop: 15 }}
        >
          <M.BarContainer>
            <M.Bar />
          </M.BarContainer>

          {/* 태그 필터 */}
          <M.TagFilterContainer>
            {['전체', '체험부스', '판매부스', '푸드트럭', '기타'].map((tag) => (
              <M.TagFilter key={tag}>{tag}</M.TagFilter>
            ))}
          </M.TagFilterContainer>
        </M.TouchSection>

        {/* 부스 카드 */}
        <M.BoothContentArea>
          {/* {booths.map((booth, index) => (
            <BoothCard key={index} booth={booth} />
          ))} */}
          {filteredBooths.map((booth, index) => (
            <BoothCard key={index} booth={booth} />
          ))}
        </M.BoothContentArea>
        </M.SlidingPanel>
    </M.Map>
  );
}

export default Map;
