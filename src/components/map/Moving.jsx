import { React, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as M from '@map/MapStyle';
import MarkerIcon from '../../assets/map/marker.svg';
import BoothIcon from '../../assets/map/boothactive.svg';
import FoodIcon from '../../assets/map/foodactive.svg';
import HintIcon from '../../assets/map/hintactive.svg';
import FoodMarker from '../../assets/map/food_marker.svg';
import HintMarker from '../../assets/map/hintmarker.svg';
import mapSmall from '../../assets/map/mapSmall.svg';
import mapBig from '../../assets/map/mapBig.svg';

function getMarkerIcon(boothRole, id, activeId) {
  const isActive = id === activeId;
  if (boothRole === 'FOOD_TRUCK') {
    return { iconSrc: isActive ? FoodIcon : FoodMarker, iconAlt: 'food marker' };
  } else if (boothRole === 'HINT') {
    return { iconSrc: isActive ? HintIcon : HintMarker, iconAlt: 'hint marker' };
  } else if (isActive) {
    return { iconSrc: BoothIcon, iconAlt: 'active booth marker' };
  }
  return { iconSrc: MarkerIcon, iconAlt: 'marker' };
}

function CustomMarker({ id, activeId, top, left, right, onClick, boothRole }) {
  const isActive = id === activeId;

  const style = {
    position: 'absolute',
    top: top ? `calc(${top} + ${isActive ? '-7px' : '0px'})` : undefined,
    left: left ? `calc(${left} + ${isActive ? '-7px' : '0px'})` : undefined,
    right: right ? `calc(${right} + ${isActive ? '-7px' : '0px'})` : undefined,
    zIndex: isActive ? 2 : undefined,
    cursor: 'pointer',
    userSelect: 'none',
    pointerEvents: 'auto',
  };

  const { iconSrc, iconAlt } = getMarkerIcon(boothRole, id, activeId);

  return <img src={iconSrc} alt={iconAlt} style={style} onClick={() => onClick && onClick(id)} draggable={false} />;
}

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
  boothsByRole, // new prop
  onBoothSelect,
}) {
  const isMobile = window.innerWidth <= 768;

  const dragConstraints = isMobile
    ? {
        left: window.innerWidth - imageWidth,
        right: 0,
        top: window.innerHeight <= 600 ? -imageHeight * 0.35 : -imageHeight * 0.25,
        bottom: -imageHeight * 0.01,
      }
    : {
        left: -imageWidth * 0.4,
        right: -imageWidth * 0.005,
        top: window.innerHeight <= 600 ? -imageHeight * 0.35 : -imageHeight * 0.2,
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
      onBoothSelect(id);
    }
  };

  const handleBackgroundClick = () => {
    if (isFoodTruckActive === true) {
      setIsFoodTruckActive(false);
    }
    closeDetail();
  };

  // mapping: booth id -> array of marker position objects
  const boothMarkerPositions = {
    // BOOTH markers
    66: [{ top: '185px', right: '290px' }],
    50: [{ top: '259px', right: '290px' }],
    68: [{ top: '222px', right: '290px' }],
    7: [{ top: '302px', left: '195px' }],
    8: [{ top: '302px', left: '240px' }],
    11: [{ top: '302px', left: '285px' }],
    12: [{ top: '348px', left: '285px' }],
    13: [{ top: '375px', left: '285px' }],
    14: [{ top: '402px', left: '285px' }],
    15: [{ top: '429px', left: '285px' }],
    16: [{ top: '456px', left: '285px' }],
    17: [{ top: '483px', left: '285px' }],
    18: [{ top: '510px', left: '285px' }],
    20: [{ top: '537px', left: '285px' }],
    21: [{ top: '564px', left: '285px' }],
    23: [{ top: '655px', left: '210px' }],
    24: [{ top: '348px', right: '270px' }],
    25: [{ top: '348px', right: '242px' }],
    27: [{ top: '348px', right: '214px' }],
    28: [{ top: '348px', right: '186px' }],
    29: [{ top: '348px', right: '158px' }],
    30: [{ top: '538px', right: '270px' }],
    31: [{ top: '538px', right: '242px' }],
    35: [{ top: '538px', right: '214px' }],
    47: [
      { top: '538px', right: '186px' },
      { top: '538px', right: '158px' },
      { top: '368px', right: '290px' },
      { top: '393px', right: '290px' },
      { top: '417px', right: '290px' },
      { top: '442px', right: '290px' },
      { top: '467px', right: '290px' },
      { top: '492px', right: '290px' },
      { top: '517px', right: '290px' },
    ],
    // FOOD_TRUCK markers
    72: [{ top: '353px', left: '140px' }],
    73: [{ top: '376px', left: '140px' }],
    74: [{ top: '399px', left: '140px' }],
    75: [{ top: '422px', left: '140px' }],
    76: [{ top: '445px', left: '140px' }],
    77: [{ top: '468px', left: '140px' }],
    78: [{ top: '491px', left: '140px' }],
    79: [{ top: '514px', left: '140px' }],
    80: [{ top: '537px', left: '140px' }],
    81: [{ top: '560px', left: '140px' }],
    // HINT markers
    92: [{ top: '170px', left: '115px' }],
    93: [{ top: '185px', right: '240px' }],
    94: [{ top: '302px', right: '240px' }],
    95: [{ top: '417px', left: '332px' }],
    96: [{ top: '498px', left: '332px' }],
    97: [{ top: '545px', left: '240px' }],
    98: [{ top: '610px', left: '240px' }],
    99: [{ top: '610px', left: '140px' }],
    100: [{ top: '655px', left: '240px' }],
  };

  // 콘솔에 boothsByRole['HINT'] 값 출력
  console.log('힌트 부스:', boothsByRole?.['HINT']);
  return (
    <>
      <M.ImageWrapper>
        <motion.div
          drag
          dragConstraints={dragConstraints}
          dragElastic={0.2}
          dragTransition={{ bounceStiffness: 120, bounceDamping: 12 }}
          style={{ position: 'absolute', width: imageWidth, height: imageHeight }}
          onDrag={(info) => dragOffset && setDragOffset(info.offset)}>
          <M.DraggableMapImage
            src={isZoomed ? mapBig : mapSmall}
            alt="map background"
            style={{ pointerEvents: 'auto' }}
            draggable={false}
            onClick={handleBackgroundClick}
          />
          {isZoomed && (
            <>
              {/* Render BOOTH markers */}
              {boothsByRole &&
                boothsByRole['BOOTH'] &&
                boothsByRole['BOOTH'].flatMap((booth) =>
                  (boothMarkerPositions[booth.id] || []).map((pos, idx) => (
                    <CustomMarker
                      key={`booth-${booth.id}-${idx}`}
                      id={booth.id}
                      activeId={activeMarkerId}
                      top={pos.top}
                      left={pos.left}
                      right={pos.right}
                      onClick={() => handleMarkerClick(booth.id, booth.boothRole)}
                      boothRole={booth.boothRole}
                    />
                  )),
                )}
              {/* Render FOOD_TRUCK markers */}
              {boothsByRole &&
                boothsByRole['FOOD_TRUCK'] &&
                boothsByRole['FOOD_TRUCK'].flatMap((booth) =>
                  (boothMarkerPositions[booth.id] || []).map((pos, idx) => (
                    <CustomMarker
                      key={`foodtruck-${booth.id}-${idx}`}
                      id={booth.id}
                      top={pos.top}
                      left={pos.left}
                      right={pos.right}
                      onClick={() => handleMarkerClick(booth.id, booth.boothRole)}
                      boothRole={booth.boothRole}
                    />
                  )),
                )}
              {/* Render HINT markers */}
              {boothsByRole &&
                boothsByRole['HINT'] &&
                boothsByRole['HINT'].flatMap((booth) =>
                  (boothMarkerPositions[booth.id] || []).map((pos, idx) => (
                    <CustomMarker
                      key={`hint-${booth.id}-${idx}`}
                      id={booth.id}
                      activeId={activeMarkerId}
                      top={pos.top}
                      left={pos.left}
                      right={pos.right}
                      onClick={() => handleMarkerClick(booth.id, booth.boothRole)}
                      boothRole={booth.boothRole}
                    />
                  )),
                )}
            </>
          )}
          {isZoomed && isFoodTruckActive && (
            <img
              src={FoodIcon}
              alt="active food icon"
              style={{
                position: 'absolute',
                top: '320px',
                left: '130px',
                pointerEvents: 'none',
              }}
              draggable={false}
            />
          )}
        </motion.div>
      </M.ImageWrapper>
    </>
  );
}

export default Moving;
