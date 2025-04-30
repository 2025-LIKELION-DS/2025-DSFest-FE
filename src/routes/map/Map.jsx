import * as M from '@map/MapStyle';
import BoothCard from './BoothCard';
import booths from './booths.json';
import usePanelDrag from './hook/usePanelDrag';

import toggleDown from '../../assets/map/toggleDown.svg';
import Minus from '../../assets/map/minus.svg';
import Plus from '../../assets/map/plus.svg';

function Map() {

const {
    panelState,
    translateY,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
  } = usePanelDrag();



  return (
    <>
<M.Map>
  {/* 상단 선택 영역 */}
  <M.MapArea>
    <M.ZoomButtonWrapper>
      <M.ZoomButton><M.Minus src={Minus} alt="-" /></M.ZoomButton>
      <M.ZoomButton><M.Plus src={Plus} alt="+" /></M.ZoomButton>
    </M.ZoomButtonWrapper>
    <M.DateWrapper>
      <M.DaySelectButton>수요일 낮</M.DaySelectButton>
      <M.ToggleImage src={toggleDown} alt="토글" />
    </M.DateWrapper>
  </M.MapArea>

  <M.BoothCardContainer
    panelState={panelState}
    dragOffset={translateY}
  >
    {/* 바 */}
    <M.TouchSection
    onMouseDown={handleMouseDown}
    onTouchStart={handleTouchStart}
    onTouchMove={handleTouchMove}
    onTouchEnd={handleTouchEnd}
    >
    <M.BarContainer><M.Bar></M.Bar></M.BarContainer>
    
    {/* 태그 필터 영역 */}
    <M.TagFilterContainer>
        {['전체', '체험부스', '판매부스', '푸드트럭', '기타'].map((tag) => (
          <M.TagFilter key={tag}>{tag}</M.TagFilter>
        ))}
    </M.TagFilterContainer>
    </M.TouchSection>

    {/* 부스 */}
    <M.BoothContentArea>
    {booths.map((booth, index) => (
      <BoothCard key={index} booth={booth} />
    ))}
    </M.BoothContentArea>
  </M.BoothCardContainer>
</M.Map>
    </>
  );
}

export default Map;
// 