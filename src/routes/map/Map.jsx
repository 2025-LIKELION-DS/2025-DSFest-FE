import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import foodTruckJson from '@data/foods.json';
import boothsData from '@data/booths.json';

import { useDragControls } from 'framer-motion';
import * as M from '@map/MapStyle';
import BoothDetailModal from '@components/map/BoothDetailModal.jsx';
import SlidingPanelSection from '@components/map/Sliding.jsx';
import Moving from '@components/map/Moving.jsx';

import mapSmall from '@assets/map/mapSmall.svg';
import mapBig from '@assets/map/mapBig.svg';
import toggleDown from '@assets/map/toggleDown.svg';
import toggleUp from '@assets/map/toggleUp.svg';
import Minus from '@assets/map/minus.svg';
import Plus from '@assets/map/plus.svg';
import MinusB from '@assets/map/minusblack.svg';
import PlusB from '@assets/map/plusblack.svg';

function Map() {
  const [isZoomed, setIsZoomed] = useState(true);
  const controls = useDragControls();
  const isMobile = window.innerWidth <= 768;
  const [panelHeight, setPanelHeight] = useState(isMobile ? window.innerHeight * 0.45 : 490);

  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const imageWidth = 676;
  const imageHeight = 852;

  const [isDateOpen, setIsDateOpen] = useState(false);

  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  const isBefore1430 = hour < 14 || (hour === 14 && minute < 30);

  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const day1 = new Date(2025, 4, 14);
  const day2 = new Date(2025, 4, 15);
  const day3 = new Date(2025, 4, 16);

  let initialDay = '수요일 낮';

  if (today.getTime() === day1.getTime()) {
    initialDay = isBefore1430 ? '수요일 낮' : '수요일 밤';
  } else if (today.getTime() === day2.getTime()) {
    initialDay = isBefore1430 ? '목요일 낮' : '목요일 밤';
  } else if (today.getTime() === day3.getTime()) {
    initialDay = isBefore1430 ? '금요일 낮' : '금요일 밤';
  }

  const [selectedDay, setSelectedDay] = useState(initialDay);

  const [selectedTags, setSelectedTags] = useState(['전체']);
  const handleTagClick = (tag) => {
    if (tag === '전체') {
      setSelectedTags(['전체']);
    } else {
      setSelectedTags((prev) => {
        const withoutAll = prev.filter((t) => t !== '전체');
        if (prev.includes(tag)) {
          const next = withoutAll.filter((t) => t !== tag);
          return next.length === 0 ? ['전체'] : next;
        } else {
          return [...withoutAll, tag];
        }
      });
    }
  };

  const [booths, setBooths] = useState([]);
  const [setIsLoading] = useState(true);

  const [foodTruckData, setFoodTruckData] = useState(false);

  const boothsByRole = {
    FOOD_TRUCK: booths.filter((b) => b.boothRole === 'FOOD_TRUCK'),
    BOOTH: booths.filter((b) => b.boothRole === 'BOOTH'),
    HINT: booths.filter((b) => b.boothRole === 'HINT'),
  };

  const filteredBooths = booths
    .filter((booth) => {
      const [dayKor, timeKor] = selectedDay.split(' ');
      return booth.schedules?.some(
        (schedule) =>
          (schedule.day === dayKor || booth.scheduleDescription?.includes('매일')) && schedule.time === timeKor,
      );
    })
    .filter((booth) => {
      if (selectedTags.includes('전체')) return true;

      const boothTypes =
        booth.boothRole !== 'HINT' && booth.boothRole !== 'FOOD_TRUCK'
          ? Array.isArray(booth.boothType) && booth.boothType.length > 0
            ? booth.boothType
            : ['기타']
          : booth.boothType || [];

      const matchesType = boothTypes.some((type) => selectedTags.includes(type));
      const matchesOperator = booth.boothOperator && selectedTags.includes(booth.boothOperator);

      return matchesType || matchesOperator;
    });

  useEffect(() => {
    try {
      const boothData = boothsData?.data?.booths || [];
      setBooths(boothData);
      setIsLoading(false);
    } catch (err) {
      console.error('로컬 부스 데이터 불러오기 실패:', err);
    }
  }, []);

  useEffect(() => {
    try {
      const foodData = foodTruckJson?.data.foodTrucks || [];
      setFoodTruckData(foodData);
    } catch (err) {
      console.error('로컬 푸드트럭 데이터 불러오기 실패:', err);
    }
  }, []);

  const [selectedBooth, setSelectedBooth] = useState(null);
  const [activeMarkerId, setActiveMarkerId] = useState(null);
  const [showPanel, setShowPanel] = useState(true);
  const [isFoodTruckActive, setIsFoodTruckActive] = useState(false);

  // 퀴즈 props
  const location = useLocation();
  const boothIdFromPuzzle = Number(location.state?.i);

  useEffect(() => {
    if (!isZoomed) {
      setIsFoodTruckActive(false);
    }
  }, [isZoomed]);

  useEffect(() => {
    if (boothIdFromPuzzle && booths.length > 0) {
      const target = booths.find((b) => b.id === boothIdFromPuzzle);
      if (target) {
        setSelectedBooth(target);
        setActiveMarkerId(boothIdFromPuzzle);
        setIsZoomed(true);
        setShowPanel(false);
        setIsFoodTruckActive(false);
        window.history.replaceState({}, document.title);
      }
    }
  }, [boothIdFromPuzzle, booths]);

  const handleBoothClick = (boothId, boothRole) => {
    if (boothRole === 'FOOD_TRUCK') {
      setIsZoomed(true);
      setIsFoodTruckActive(true);
      setSelectedBooth(null);
      setActiveMarkerId(null);
      setShowPanel(true);
    } else {
      const target = booths.find((b) => b.id === boothId);
      if (target) {
        setIsZoomed(true);
        setSelectedBooth(target);
        setActiveMarkerId(boothId);
        setIsFoodTruckActive(false);
        setShowPanel(false);
      }
    }
  };

  const closeDetail = () => {
    setSelectedBooth(null);
    setActiveMarkerId(null);
    setIsFoodTruckActive(null);
    setShowPanel(true);
  };

  const handleDateSelect = (day) => {
    setSelectedDay(day);
    setIsDateOpen(false);
  };

  const handleZoomOut = () => setIsZoomed(false);
  const handleZoomIn = () => setIsZoomed(true);

  return (
    <M.Map>
      {booths.length > 0 && (
        <Moving
          isZoomed={isZoomed}
          mapSmall={mapSmall}
          mapBig={mapBig}
          imageWidth={imageWidth}
          imageHeight={imageHeight}
          activeMarkerId={activeMarkerId}
          setActiveMarkerId={setActiveMarkerId}
          handleBoothClick={handleBoothClick}
          setDragOffset={setDragOffset}
          dragOffset={dragOffset}
          closeDetail={closeDetail}
          boothsByRole={boothsByRole}
          booths={booths}
          isFoodTruckActive={isFoodTruckActive}
          setIsFoodTruckActive={setIsFoodTruckActive}
          onBoothSelect={() => {}}
          selectedDayTime={selectedDay}
          selectedTags={selectedTags}
          onBackgroundClick={() => setIsDateOpen(false)}
        />
      )}
      <>
        <M.ZoomButtonWrapper onClick={closeDetail}>
          <M.ZoomButton onClick={handleZoomOut} disabled={!isZoomed}>
            <M.Minus src={isZoomed ? MinusB : Minus} alt="-" />
          </M.ZoomButton>

          <M.ZoomButton onClick={handleZoomIn} disabled={isZoomed}>
            <M.Plus src={isZoomed ? Plus : PlusB} alt="+" />
          </M.ZoomButton>
        </M.ZoomButtonWrapper>

        <M.DateWrapper onClick={() => setIsDateOpen((prev) => !prev)}>
          <M.DaySelectButton>{selectedDay}</M.DaySelectButton>
          <M.ToggleImage src={isDateOpen ? toggleUp : toggleDown} alt="토글" />
        </M.DateWrapper>

        {isDateOpen && (
          <M.DateDropdown onClick={closeDetail}>
            {['수요일 낮', '수요일 밤', '목요일 낮', '목요일 밤', '금요일 낮', '금요일 밤'].map((day) => (
              <M.DateOption
                key={day}
                onClick={() => handleDateSelect(day)}
                style={{ fontWeight: selectedDay === day ? 600 : 400 }}>
                {day}
              </M.DateOption>
            ))}
          </M.DateDropdown>
        )}
      </>

      {showPanel && booths.length > 0 && (
        <SlidingPanelSection
          panelHeight={panelHeight}
          setPanelHeight={setPanelHeight}
          controls={controls}
          selectedTags={selectedTags}
          handleTagClick={handleTagClick}
          filteredBooths={isFoodTruckActive ? [] : filteredBooths}
          foodTruckData={isFoodTruckActive ? foodTruckData : null}
          isFoodTruckActive={isFoodTruckActive}
          setIsZoomed={setIsZoomed}
          handleBoothClick={handleBoothClick}
          setActiveMarkerId={setActiveMarkerId}
          setIsFoodTruckActive={setIsFoodTruckActive}
          selectedDayTime={selectedDay}
        />
      )}

      {selectedBooth && booths.length > 0 && (
        <BoothDetailModal
          booth={{
            id: selectedBooth?.id,
            name: selectedBooth?.boothName,
            owner: selectedBooth?.boothOperator,
            types: selectedBooth?.boothType,
            times: selectedBooth?.schedules.map((s) => `${s.day} ${s.time}`),
            details: selectedBooth?.boothIntroduce,
            link: selectedBooth?.boothSite,
          }}
          isHint={selectedBooth?.boothRole === 'HINT'}
          onClose={closeDetail}
        />
      )}
    </M.Map>
  );
}

export default Map;
