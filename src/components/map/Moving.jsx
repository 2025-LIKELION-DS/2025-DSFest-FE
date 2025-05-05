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
  };

  const handleBackgroundClick = () => {
    if (isFoodTruckActive === true) {
      setIsFoodTruckActive(false);
    }
    closeDetail();
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
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="185px"
                right="290px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="259px"
                right="290px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="302px"
                left="195px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="302px"
                left="240px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="302px"
                left="285px"
                onClick={() => handleMarkerClick(1)}
              />

              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="348px"
                left="285px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="375px"
                left="285px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="402px"
                left="285px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="429px"
                left="285px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="456px"
                left="285px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="483px"
                left="285px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="510px"
                left="285px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="537px"
                left="285px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="564px"
                left="285px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="655px"
                left="210px"
                onClick={() => handleMarkerClick(1)}
              />

              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="348px"
                right="270px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="348px"
                right="242px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="348px"
                right="214px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="348px"
                right="186px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="348px"
                right="158px"
                onClick={() => handleMarkerClick(1)}
              />

              <CustomMarker
                id={2}
                activeId={activeMarkerId}
                top="368px"
                right="290px"
                onClick={() => handleMarkerClick(2)}
              />
              <CustomMarker
                id={5}
                activeId={activeMarkerId}
                top="393px"
                right="290px"
                onClick={() => handleMarkerClick(5)}
              />
              <CustomMarker
                id={5}
                activeId={activeMarkerId}
                top="417px"
                right="290px"
                onClick={() => handleMarkerClick(5)}
              />
              <CustomMarker
                id={5}
                activeId={activeMarkerId}
                top="442px"
                right="290px"
                onClick={() => handleMarkerClick(5)}
              />
              <CustomMarker
                id={5}
                activeId={activeMarkerId}
                top="467px"
                right="290px"
                onClick={() => handleMarkerClick(5)}
              />
              <CustomMarker
                id={5}
                activeId={activeMarkerId}
                top="492px"
                right="290px"
                onClick={() => handleMarkerClick(5)}
              />
              <CustomMarker
                id={5}
                activeId={activeMarkerId}
                top="517px"
                right="290px"
                onClick={() => handleMarkerClick(5)}
              />

              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="538px"
                right="270px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="538px"
                right="242px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="538px"
                right="214px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="538px"
                right="186px"
                onClick={() => handleMarkerClick(1)}
              />
              <CustomMarker
                id={1}
                activeId={activeMarkerId}
                top="538px"
                right="158px"
                onClick={() => handleMarkerClick(1)}
              />

              {/* 푸드트럭 */}
              <CustomMarker
                id={4}
                top="353px"
                left="140px"
                onClick={() => handleMarkerClick(4, 'FOOD_TRUCK')}
                boothRole="FOOD_TRUCK"
              />
              <CustomMarker
                id={4}
                top="376px"
                left="140px"
                onClick={() => handleMarkerClick(4, 'FOOD_TRUCK')}
                boothRole="FOOD_TRUCK"
              />
              <CustomMarker
                id={4}
                top="399px"
                left="140px"
                onClick={() => handleMarkerClick(4, 'FOOD_TRUCK')}
                boothRole="FOOD_TRUCK"
              />
              <CustomMarker
                id={4}
                top="422px"
                left="140px"
                onClick={() => handleMarkerClick(4, 'FOOD_TRUCK')}
                boothRole="FOOD_TRUCK"
              />
              <CustomMarker
                id={4}
                top="445px"
                left="140px"
                onClick={() => handleMarkerClick(4, 'FOOD_TRUCK')}
                boothRole="FOOD_TRUCK"
              />
              <CustomMarker
                id={4}
                top="468px"
                left="140px"
                onClick={() => handleMarkerClick(4, 'FOOD_TRUCK')}
                boothRole="FOOD_TRUCK"
              />
              <CustomMarker
                id={4}
                top="491px"
                left="140px"
                onClick={() => handleMarkerClick(4, 'FOOD_TRUCK')}
                boothRole="FOOD_TRUCK"
              />
              <CustomMarker
                id={4}
                top="514px"
                left="140px"
                onClick={() => handleMarkerClick(4, 'FOOD_TRUCK')}
                boothRole="FOOD_TRUCK"
              />
              <CustomMarker
                id={4}
                top="537px"
                left="140px"
                onClick={() => handleMarkerClick(4, 'FOOD_TRUCK')}
                boothRole="FOOD_TRUCK"
              />
              <CustomMarker
                id={4}
                top="560px"
                left="140px"
                onClick={() => handleMarkerClick(4, 'FOOD_TRUCK')}
                boothRole="FOOD_TRUCK"
              />
              {/* 힌트 */}
              <CustomMarker
                id={3}
                activeId={activeMarkerId}
                top="170px"
                left="115px"
                onClick={() => handleMarkerClick(3, 'HINT')}
                boothRole="HINT"
              />
              <CustomMarker
                id={3}
                activeId={activeMarkerId}
                top="185px"
                right="240px"
                onClick={() => handleMarkerClick(3, 'HINT')}
                boothRole="HINT"
              />
              <CustomMarker
                id={3}
                activeId={activeMarkerId}
                top="222px"
                right="290px"
                onClick={() => handleMarkerClick(3, 'HINT')}
                boothRole="HINT"
              />
              <CustomMarker
                id={3}
                activeId={activeMarkerId}
                top="302px"
                right="240px"
                onClick={() => handleMarkerClick(3, 'HINT')}
                boothRole="HINT"
              />
              <CustomMarker
                id={3}
                activeId={activeMarkerId}
                top="417px"
                left="332px"
                onClick={() => handleMarkerClick(3, 'HINT')}
                boothRole="HINT"
              />
              <CustomMarker
                id={3}
                activeId={activeMarkerId}
                top="498px"
                left="332px"
                onClick={() => handleMarkerClick(3, 'HINT')}
                boothRole="HINT"
              />
              <CustomMarker
                id={3}
                activeId={activeMarkerId}
                top="545px"
                left="240px"
                onClick={() => handleMarkerClick(3, 'HINT')}
                boothRole="HINT"
              />
              <CustomMarker
                id={3}
                activeId={activeMarkerId}
                top="610px"
                left="240px"
                onClick={() => handleMarkerClick(3, 'HINT')}
                boothRole="HINT"
              />
              <CustomMarker
                id={3}
                activeId={activeMarkerId}
                top="610px"
                left="140px"
                onClick={() => handleMarkerClick(3, 'HINT')}
                boothRole="HINT"
              />
              <CustomMarker
                id={3}
                activeId={activeMarkerId}
                top="655px"
                left="240px"
                onClick={() => handleMarkerClick(3, 'HINT')}
                boothRole="HINT"
              />
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
