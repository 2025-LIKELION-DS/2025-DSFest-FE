import { useState } from 'react';
import * as M from '@map/MapStyle';
import BoothCard from './BoothCard';
import booths from './booths.json';

import mapSmall from '../../assets/map/mapSmall.svg';
import mapBig from '../../assets/map/mapBig.svg';
import toggleDown from '../../assets/map/toggleDown.svg';
import Minus from '../../assets/map/minus.svg';
import Plus from '../../assets/map/plus.svg';
import MinusB from '../../assets/map/minusblack.svg';
import PlusB from '../../assets/map/plusblack.svg';

import { motion, useDragControls } from 'framer-motion';

function Map() {
  const [isZoomed, setIsZoomed] = useState(false);
  const controls = useDragControls();
  const [panelHeight, setPanelHeight] = useState(490);

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

        <M.DateWrapper>
          <M.DaySelectButton>수요일 낮</M.DaySelectButton>
          <M.ToggleImage src={toggleDown} alt="토글" />
        </M.DateWrapper>
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
          if (panelHeight > 600) setPanelHeight(window.innerHeight * 0.92);
          else if (panelHeight < 200) setPanelHeight(93);
          else setPanelHeight(490);
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
          {booths.map((booth, index) => (
            <BoothCard key={index} booth={booth} />
          ))}
        </M.BoothContentArea>
        </M.SlidingPanel>
    </M.Map>
  );
}

export default Map;
