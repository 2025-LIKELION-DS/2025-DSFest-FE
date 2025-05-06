const fixedMarkers = {
  1: { top: '185px', right: '290px' },
  2: { top: '259px', right: '290px' },
  3: { top: '222px', right: '290px' },

  4: { top: '302px', left: '195px' },
  5: { top: '302px', left: '240px' },
  6: { top: '302px', left: '285px' },

  7: { top: '348px', left: '285px' },
  8: { top: '375px', left: '285px' },
  9: { top: '402px', left: '285px' },
  10: { top: '429px', left: '285px' },
  11: { top: '456px', left: '285px' },
  12: { top: '483px', left: '285px' },
  13: { top: '510px', left: '285px' },
  14: { top: '537px', left: '285px' },
  15: { top: '564px', left: '285px' },

  16: { top: '655px', left: '210px' },

  17: { top: '348px', right: '270px' },
  18: { top: '348px', right: '242px' },
  19: { top: '348px', right: '214px' },
  20: { top: '348px', right: '186px' },
  21: { top: '348px', right: '158px' },

  22: { top: '538px', right: '270px' },
  23: { top: '538px', right: '242px' },
  24: { top: '538px', right: '214px' },
  25: { top: '538px', right: '186px' },
  26: { top: '538px', right: '158px' },

  28: { top: '393px', right: '290px' },
  29: { top: '417px', right: '290px' },
  30: { top: '442px', right: '290px' },
  31: { top: '467px', right: '290px' },
  32: { top: '492px', right: '290px' },
  33: { top: '517px', right: '290px' },
};

const boothMappingByTime = {
  '수요일 낮': {
    1: 34,
    2: 44,
    3: 51,

    4: 16,
    5: 16,
    6: 16,

    7: 11,
    8: 33,
    9: 8,
    10: 45,
    11: 26,
    12: 48,
    13: 41,
    14: 61,
    15: 42,

    16: 4,

    17: 71,
    18: 70,
    19: 67,
    20: 69,
    21: 27,

    22: 53,
    23: 37,
    24: 2,
    25: 24,
    26: 1,

    28: 3,
    29: 29,
    30: 50,
    31: 10,
    32: 12,
    33: 5,
  },
  '수요일 밤': {
    1: 34,
    2: 44,
    3: 51,

    4: 16,
    5: 16,
    6: 16,

    7: 11,
    8: 33,
    9: 8,
    10: 19,
    11: 40,
    12: 7,
    13: 41,
    14: 10,
    15: 45,

    16: 0,

    17: 25,
    18: 28,
    19: 17,
    20: 31,
    21: 66,

    22: 68,
    23: 14,
    24: 60,
    25: 43,
    26: 1,

    28: 62,
    29: 61,
    30: 59,
    31: 35,
    32: 30,
    33: 37,
  },
  '목요일 낮': {
    1: 0,
    2: 44,
    3: 51,

    4: 16,
    5: 16,
    6: 22,

    7: 11,
    8: 33,
    9: 8,
    10: 9,
    11: 46,
    12: 19,
    13: 48,
    14: 54,
    15: 61,

    16: 34,

    17: 27,
    18: 15,
    19: 6,
    20: 36,
    21: 28,

    22: 42,
    23: 65,
    24: 13,
    25: 43,
    26: 1,

    28: 3,
    29: 56,
    30: 68,
    31: 30,
    32: 52,
    33: 18,
  },
  '목요일 밤': {
    1: 0,
    2: 44,
    3: 51,

    4: 16,
    5: 16,
    6: 22,

    7: 11,
    8: 33,
    9: 8,
    10: 29,
    11: 24,
    12: 35,
    13: 62,
    14: 19,
    15: 43,

    16: 34,

    17: 69,
    18: 66,
    19: 31,
    20: 70,
    21: 6,

    22: 23,
    23: 25,
    24: 2,
    25: 63,
    26: 1,

    28: 14,
    29: 21,
    30: 12,
    31: 60,
    32: 65,
    33: 18,
  },
  '금요일 낮': {
    1: 0,
    2: 44,
    3: 51,

    4: 16,
    5: 16,
    6: 16,

    7: 11,
    8: 33,
    9: 8,
    10: 42,
    11: 3,
    12: 50,
    13: 5,
    14: 60,
    15: 20,

    16: 34,

    17: 12,
    18: 71,
    19: 67,
    20: 25,
    21: 55,

    22: 39,
    23: 53,
    24: 47,
    25: 38,
    26: 1,

    28: 30,
    29: 29,
    30: 57,
    31: 58,
    32: 49,
    33: 18,
  },
  '금요일 밤': {
    1: 0,
    2: 44,
    3: 51,

    4: 16,
    5: 16,
    6: 16,

    7: 11,
    8: 33,
    9: 8,
    10: 14,
    11: 38,
    12: 26,
    13: 49,
    14: 54,
    15: 29,

    16: 34,

    17: 28,
    18: 15,
    19: 17,
    20: 64,
    21: 36,

    22: 47,
    23: 58,
    24: 2,
    25: 40,
    26: 1,

    28: 62,
    29: 57,
    30: 21,
    31: 20,
    32: 52,
    33: 32,
  },
};
import { React } from 'react';
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
  boothsByRole,
  onBoothSelect,
  selectedDayTime,
  selectedTags,
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
      onBoothSelect(id, boothRole);
    }
  };

  const handleBackgroundClick = () => {
    if (isFoodTruckActive === true) {
      setIsFoodTruckActive(false);
    }
    closeDetail();
  };

  const boothMarkerPositions = {
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
    98: [
      { top: '170px', left: '115px' },
      { top: '610px', left: '240px' },
    ],
    99: [{ top: '185px', right: '240px' }],
    92: [{ top: '302px', right: '240px' }],
    93: [{ top: '368px', right: '290px' }],
    96: [
      { top: '417px', left: '332px' },
      { top: '498px', left: '332px' },
    ],
    95: [{ top: '545px', left: '240px' }],
    97: [{ top: '610px', left: '140px' }],
    94: [{ top: '655px', left: '240px' }],
  };

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
              {(() => {
                const mapping = boothMappingByTime[selectedDayTime] || {};
                return Object.entries(fixedMarkers).map(([markerId, pos]) => {
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
                      key={`fixedmarker-${markerId}`}
                      id={boothId}
                      activeId={activeMarkerId}
                      top={pos.top}
                      left={pos.left}
                      right={pos.right}
                      onClick={() => handleMarkerClick(boothId, boothRole)}
                      boothRole={boothRole}
                    />
                  );
                });
              })()}
              {boothsByRole &&
                boothsByRole['FOOD_TRUCK'] &&
                boothsByRole['FOOD_TRUCK']
                  .filter((booth) => {
                    if (!selectedTags?.length || selectedTags.includes('전체')) return true;
                    return selectedTags.includes('푸드트럭');
                  })
                  .flatMap((booth) =>
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
