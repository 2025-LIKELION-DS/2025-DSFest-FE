import React, { useEffect, useRef } from 'react';
import * as M from '@map/MapStyle';
import BoothCard from './BoothCard';
import FoodCard from './FoodCard';

const createBoothObject = (booth) => {
  const isEtc =
    booth.boothRole !== 'HINT' &&
    booth.boothRole !== 'FOOD_TRUCK' &&
    (!Array.isArray(booth.boothType) || booth.boothType.length === 0);

  return {
    id: booth.id,
    name: booth.boothName,
    owner: booth.boothOperator,
    types: isEtc ? ['기타'] : booth.boothType,
    times: booth.schedules.map((s) => (booth.boothRole === 'FOOD_TRUCK' ? s.day : `${s.day} ${s.time}`)),
    details: booth.boothIntroduce,
    link: booth.boothSite,
    role: booth.boothRole,
  };
};

const renderTagFilters = (selectedTags, handleTagClick) => (
  <M.TagFilterContainer>
    {['전체', '체험부스', '판매부스', '푸드트럭', '기타'].map((tag) => (
      <M.TagFilter key={tag} $selected={selectedTags.includes(tag)} onClick={() => handleTagClick(tag)}>
        {tag}
      </M.TagFilter>
    ))}
  </M.TagFilterContainer>
);

const renderBoothCards = ({ filteredBooths, handleBoothClick, setActiveMarkerId, setIsFoodTruckActive, setIsZoomed }) =>
  filteredBooths.map((booth, index) => {
    const boothObj = createBoothObject(booth);
    const handleBoothCardClick = () => {
      handleBoothClick(booth.id, booth.boothRole);
      setActiveMarkerId(booth.id);
      setIsFoodTruckActive(booth.boothRole === 'FOOD_TRUCK');
      setIsZoomed(true);
    };
    return <BoothCard key={index} booth={boothObj} onClick={handleBoothCardClick} />;
  });

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
  selectedDayTime,
}) {
  const contentRef = useRef(null);

  const handleDragEnd = () => {
    const isMobile = window.innerWidth <= 768;
    const maxHeight = isMobile ? window.innerHeight * 0.83 : 740;
    const midHeight = isMobile ? window.innerHeight * 0.55 : 490;
    const minHeight = isMobile ? 105 : 93;

    if ((isMobile && panelHeight > midHeight) || (!isMobile && panelHeight > 490)) {
      setPanelHeight(maxHeight);
    } else if ((isMobile && panelHeight > minHeight) || (!isMobile && panelHeight > minHeight)) {
      setPanelHeight(midHeight);
    } else {
      setPanelHeight(minHeight);
    }
  };

  const handleDrag = (e, info) => {
    const deltaY = info.delta.y;
    const minHeight = isFoodTruckActive ? (window.innerWidth <= 768 ? window.innerHeight * 0.55 : 490) : 93;
    const newHeight = Math.min(window.innerHeight * 0.92, Math.max(minHeight, panelHeight - deltaY));
    setPanelHeight(newHeight);
  };

  const handlePointerDown = (e) => {
    controls.start(e);
  };

  const renderPanelContent = () => {
    if (isFoodTruckActive && foodTruckData?.length > 0) {
      return <FoodCard foodBooth={foodTruckData} selectedDayTime={selectedDayTime} />;
    }

    return (
      <>
        {renderTagFilters(selectedTags, handleTagClick)}
        {renderBoothCards({
          filteredBooths,
          handleBoothClick,
          setActiveMarkerId,
          setIsFoodTruckActive,
          setIsZoomed,
        })}
      </>
    );
  };

  useEffect(() => {
    if (isFoodTruckActive) {
      setPanelHeight(window.innerWidth <= 768 ? window.innerHeight * 0.55 : 490);
    }
  }, [isFoodTruckActive]);

  useEffect(() => {
    const contentEl = contentRef.current;
    if (!contentEl) return;

    const handleScroll = () => {
      const scrollTop = contentEl.scrollTop;

      if (scrollTop > 400 && panelHeight < window.innerHeight * 0.8) {
        setPanelHeight(window.innerWidth <= 768 ? window.innerHeight * 0.83 : 740);
      } else if (scrollTop < 1 && panelHeight > 500) {
        setPanelHeight(window.innerWidth <= 768 ? window.innerHeight * 0.55 : 490);
      }
    };

    contentEl.addEventListener('scroll', handleScroll);
    return () => contentEl.removeEventListener('scroll', handleScroll);
  }, [panelHeight, setPanelHeight]);

  return (
    <M.SlidingPanel
      drag="y"
      dragConstraints={{ top: 0, bottom: 0 }}
      dragElastic={0}
      dragTransition={{ power: 0.2 }}
      animate={{ height: panelHeight }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
      onDrag={handleDrag}
      onDragEnd={handleDragEnd}>
      <M.TouchSection onPointerDown={handlePointerDown} style={{ cursor: 'grab', paddingTop: 15 }}>
        <M.BarContainer>
          <M.Bar />
        </M.BarContainer>
      </M.TouchSection>

      <M.BoothContentArea ref={contentRef}>{renderPanelContent()}</M.BoothContentArea>
    </M.SlidingPanel>
  );
}

export default SlidingPanelSection;
