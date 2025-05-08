import { React, useEffect } from 'react';
import { motion } from 'framer-motion';
import CustomMarker from './CustomMarker';
import * as M from '@map/MapStyle';
import mapSmall from '@assets/map/mapSmall.svg';
import mapBig from '@assets/map/mapBig.svg';
import FoodIcon from '@assets/map/foodactive.svg';
import { fixedMarkers, boothMappingByTime, boothMarkerPositions } from './MarkerMapping';

const getMarkerProps = ({ booth, pos, idx, markerId, activeMarkerId, handleMarkerClick, includeBoothName = false }) => {
  return {
    key: `${markerId || booth.id}-${idx}`,
    id: booth.id,
    activeId: activeMarkerId,
    top: pos.top,
    left: pos.left,
    right: pos.right,
    onClick: () => handleMarkerClick(booth.id, booth.boothRole),
    boothRole: booth.boothRole,
    boothName: includeBoothName ? booth?.boothName : undefined,
    isHint: booth.boothRole === 'HINT',
  };
};

const renderFixedMarkers = ({
  selectedDayTime,
  booths,
  selectedTags,
  fixedMarkers,
  boothMappingByTime,
  activeMarkerId,
  handleMarkerClick,
}) => {
  const mapping = boothMappingByTime[selectedDayTime] || {};
  return Object.entries(fixedMarkers).map(([markerId, pos], idx) => {
    const boothId = mapping[markerId];
    if (!boothId) return null;

    const booth = booths.find((b) => b.id === boothId);
    const boothRole = booth?.boothRole;
    const boothTypes = booth?.boothType || [];

    const isHint = boothRole === 'HINT';
    const isFood = boothRole === 'FOOD_TRUCK';
    const isExperience = boothTypes.includes('체험부스');
    const isSale = boothTypes.includes('판매부스');
    const isEtc = !isHint && !isFood && !isExperience && !isSale;

    const selected = selectedTags || [];
    const isAllSelected = selected.length === 0 || selected.includes('전체');
    const isEtcSelected = selected.includes('기타');
    const isFoodSelected = selected.includes('푸드트럭');
    const isExpSelected = selected.includes('체험부스');
    const isSaleSelected = selected.includes('판매부스');

    const shouldRender =
      isHint ||
      isAllSelected ||
      (isEtcSelected && isEtc) ||
      (isFoodSelected && isFood) ||
      (isExpSelected && isExperience) ||
      (isSaleSelected && isSale);

    if (!shouldRender) return null;

    return (
      <CustomMarker
        {...getMarkerProps({ booth, pos, idx, markerId, activeMarkerId, handleMarkerClick, includeBoothName: true })}
      />
    );
  });
};

const renderFoodTruckMarkers = ({ boothsByRole, boothMarkerPositions, handleMarkerClick, selectedTags }) => {
  if (!selectedTags?.length || selectedTags.includes('전체') || selectedTags.includes('푸드트럭')) {
    return boothsByRole?.['FOOD_TRUCK']?.flatMap((booth) =>
      (boothMarkerPositions[booth.id] || []).map((pos, idx) => (
        <CustomMarker {...getMarkerProps({ booth, pos, idx, handleMarkerClick })} />
      )),
    );
  }
  return null;
};

const renderHintMarkers = ({ boothsByRole, boothMarkerPositions, activeMarkerId, handleMarkerClick }) => {
  return boothsByRole?.['HINT']?.flatMap((booth) =>
    (boothMarkerPositions[booth.id] || []).map((pos, idx) => (
      <CustomMarker
        {...getMarkerProps({ booth, pos, idx, activeMarkerId, handleMarkerClick, includeBoothName: true })}
      />
    )),
  );
};

function Moving({
  booths,
  isZoomed,
  imageWidth,
  imageHeight,
  activeMarkerId,
  setActiveMarkerId,
  dragOffset,
  setDragOffset,
  closeDetail,
  handleBoothClick,
  isFoodTruckActive,
  setIsFoodTruckActive,
  boothsByRole,
  onBoothSelect,
  selectedDayTime,
  selectedTags,
  onBackgroundClick,
}) {
  const isMobile = window.innerWidth <= 600;

  useEffect(() => {
    if (!isZoomed && setDragOffset) {
      if (isMobile) {
        const centerX = (window.innerWidth - imageWidth) / 2 + 10;
        const centerY = (window.innerHeight - imageHeight) / 2;
        setDragOffset({ x: centerX, y: centerY });
      } else {
        setDragOffset({ x: -130, y: -50 });
      }
    }
  }, [isZoomed, imageWidth, imageHeight, setDragOffset, isMobile]);

  const dragConstraints = isMobile
    ? {
        left: window.innerWidth - imageWidth - 210,
        right: window.innerWidth - imageWidth + 210,
        top: window.innerHeight <= 600 ? -imageHeight * 0.8 : -imageHeight * 0.5,
        bottom: -imageHeight * 0.01,
      }
    : {
        left: -imageWidth * 0.4,
        right: -imageWidth * 0.005,
        top: window.innerHeight <= 600 ? -imageHeight * 0.35 : -imageHeight * 0.5,
        bottom: -imageHeight * 0.01,
      };

  const handleMarkerClick = (id, boothRole) => {
    if (boothRole === 'FOOD_TRUCK') {
      setActiveMarkerId(null);
      setIsFoodTruckActive(true);
    } else {
      setIsFoodTruckActive(false);
      setActiveMarkerId(id);
    }
    handleBoothClick(id, boothRole);
    if (onBoothSelect) {
      onBoothSelect(id, boothRole);
    }
  };

  const handleBackgroundClick = () => {
    if (isFoodTruckActive === true) {
      setIsFoodTruckActive(false);
    }
    closeDetail();
  };

  const motionDivProps = {
    drag: true,
    dragConstraints,
    dragElastic: 0.2,
    dragTransition: { bounceStiffness: 120, bounceDamping: 12 },
    style: {
      position: 'absolute',
      width: imageWidth,
      height: imageHeight,
      x: dragOffset?.x || 0,
      y: dragOffset?.y || 0,
    },
    onDrag: (info) => dragOffset && setDragOffset(info.offset),
  };

  const mapImageProps = {
    src: isZoomed ? mapBig : mapSmall,
    alt: 'map background',
    draggable: false,
    onClick: handleBackgroundClick,
  };

  return (
    <>
      <M.ImageWrapper onClick={onBackgroundClick}>
        <motion.div {...motionDivProps}>
          <M.DraggableMapImage {...mapImageProps} />
          {isZoomed && (
            <>
              {renderFixedMarkers({
                selectedDayTime,
                booths,
                selectedTags,
                fixedMarkers,
                boothMappingByTime,
                activeMarkerId,
                handleMarkerClick,
              })}
              {renderFoodTruckMarkers({
                boothsByRole,
                boothMarkerPositions,
                handleMarkerClick,
                selectedTags,
              })}
              {renderHintMarkers({
                boothsByRole,
                boothMarkerPositions,
                activeMarkerId,
                handleMarkerClick,
              })}
            </>
          )}
          {isZoomed && isFoodTruckActive && <M.FoodActive src={FoodIcon} alt="active food icon" draggable={false} />}
        </motion.div>
      </M.ImageWrapper>
    </>
  );
}

export default Moving;
