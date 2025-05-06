import React, { useEffect } from 'react';
import * as M from '@map/MapStyle';
import BoothCard from './BoothCard';
import FoodCard from './FoodCard';

function SlidingPanelSection({
  panelHeight,
  setPanelHeight,
  controls,
  selectedTags,
  handleTagClick,
  filteredBooths,
  isFoodTruckActive,
  foodTruckData,
  handleBoothClick,
  setActiveMarkerId,
  setIsFoodTruckActive,
  setIsZoomed,
}) {
  useEffect(() => {
    if (isFoodTruckActive) {
      setPanelHeight(window.innerWidth <= 768 ? window.innerHeight * 0.55 : 490);
    }
  }, [isFoodTruckActive]);
  return (
    <M.SlidingPanel
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0}
      animate={{ height: panelHeight }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onDrag={(e, info) => {
        const deltaY = info.delta.y;
        const minHeight = isFoodTruckActive ? (window.innerWidth <= 768 ? window.innerHeight * 0.55 : 490) : 93;
        const newHeight = Math.min(window.innerHeight * 0.92, Math.max(minHeight, panelHeight - deltaY));
        setPanelHeight(newHeight);
      }}
      onDragEnd={() => {
        if (panelHeight > 500) {
          setPanelHeight(window.innerWidth <= 768 ? window.innerHeight * 0.83 : 740);
        } else if (panelHeight < 200) setPanelHeight(window.innerWidth <= 768 ? 105 : 93);
        else {
          setPanelHeight(window.innerWidth <= 768 ? window.innerHeight * 0.55 : 490);
        }
      }}>
      <M.TouchSection onPointerDown={(e) => controls.start(e)} style={{ cursor: 'grab', paddingTop: 15 }}>
        <M.BarContainer>
          <M.Bar />
        </M.BarContainer>
      </M.TouchSection>

      <M.BoothContentArea>
        {isFoodTruckActive && foodTruckData?.length > 0 ? (
          <FoodCard foodBooth={foodTruckData} />
        ) : (
          <>
            <M.TagFilterContainer>
              {['전체', '체험부스', '판매부스', '푸드트럭', '기타'].map((tag) => (
                <M.TagFilter key={tag} $selected={selectedTags.includes(tag)} onClick={() => handleTagClick(tag)}>
                  {tag}
                </M.TagFilter>
              ))}
            </M.TagFilterContainer>

            {filteredBooths.map((booth, index) => {
              const boothObj = {
                id: booth.id,
                name: booth.boothName,
                owner: booth.boothOperator,
                types:
                  booth.boothRole !== 'HINT' &&
                  booth.boothRole !== 'FOOD_TRUCK' &&
                  (!Array.isArray(booth.boothType) || booth.boothType.length === 0)
                    ? ['기타']
                    : booth.boothType,
                times: booth.schedules.map((s) => (booth.boothRole === 'FOOD_TRUCK' ? s.day : `${s.day} ${s.time}`)),
                details: booth.boothIntroduce,
                link: booth.boothSite,
                role: booth.boothRole,
              };
              return (
                <BoothCard
                  key={index}
                  booth={boothObj}
                  onClick={() => {
                    handleBoothClick(booth.id, booth.boothRole);
                    setActiveMarkerId(booth.id);
                    setIsFoodTruckActive(booth.boothRole === 'FOOD_TRUCK');
                    setIsZoomed(true);
                  }}
                />
              );
            })}
          </>
        )}
      </M.BoothContentArea>
    </M.SlidingPanel>
  );
}

export default SlidingPanelSection;
