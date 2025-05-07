import { React } from 'react';
import { motion } from 'framer-motion';
import * as M from '@map/MapStyle';
import CustomMarker from './CustomMarker';
import mapSmall from '../../assets/map/mapSmall.svg';
import mapBig from '../../assets/map/mapBig.svg';
import FoodIcon from '../../assets/map/foodactive.svg';
import { fixedMarkers, boothMappingByTime } from './MarkerMapping';

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
                      boothName={booth?.boothName}
                      isHint={boothRole === 'HINT'}
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
                        isHint={booth.boothRole === 'HINT'}
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
                      boothName={booth?.boothName}
                      isHint={booth.boothRole === 'HINT'}
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
