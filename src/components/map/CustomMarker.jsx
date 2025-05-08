import React from 'react';
import MarkerIcon from '@assets/map/marker.svg';
import BoothIcon from '@assets/map/boothactive.svg';
import FoodIcon from '@assets/map/foodactive.svg';
import HintIcon from '@assets/map/hintactive.svg';
import FoodMarker from '@assets/map/food_marker.svg';
import HintMarker from '@assets/map/hintmarker.svg';
import * as M from './CustomMarkerStyle';

function getMarkerIcon(boothRole, isActive) {
  if (boothRole === 'FOOD_TRUCK') {
    return { iconSrc: isActive ? FoodIcon : FoodMarker, iconAlt: 'food marker' };
  } else if (boothRole === 'HINT') {
    return { iconSrc: isActive ? HintIcon : HintMarker, iconAlt: 'hint marker' };
  } else if (isActive) {
    return { iconSrc: BoothIcon, iconAlt: 'active booth marker' };
  }
  return { iconSrc: MarkerIcon, iconAlt: 'marker' };
}

function CustomMarker({ id, activeId, top, left, right, onClick, boothRole, boothName, isHint }) {
  const isActive = id === activeId;

  const { iconSrc, iconAlt } = getMarkerIcon(boothRole, isActive);

  const markerProps = {
    top,
    left,
    right,
    isActive,
    draggable: false,
  };

  return (
    <M.Wrapper {...markerProps}>
      {isActive && <M.Bubble isHint={isHint}>{boothName}</M.Bubble>}
      <M.MarkerImage {...markerProps} src={iconSrc} alt={iconAlt} onClick={() => onClick && onClick(id)} />
    </M.Wrapper>
  );
}

export default CustomMarker;
