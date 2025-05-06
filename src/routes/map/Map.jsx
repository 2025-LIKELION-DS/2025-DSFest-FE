import { useState, useEffect } from 'react';
import * as M from '@map/MapStyle';
import BoothDetailModal from '../../components/map/BoothDetailModal.jsx';
import SlidingPanelSection from '../../components/map/Sliding.jsx';
import Moving from '../../components/map/Moving.jsx';

import axios from 'axios';
import { useDragControls } from 'framer-motion';

import mapSmall from '../../assets/map/mapSmall.svg';
import mapBig from '../../assets/map/mapBig.svg';
import toggleDown from '../../assets/map/toggleDown.svg';
import toggleUp from '../../assets/map/toggleUp.svg';
import Minus from '../../assets/map/minus.svg';
import Plus from '../../assets/map/plus.svg';
import MinusB from '../../assets/map/minusblack.svg';
import PlusB from '../../assets/map/plusblack.svg';

function Map() {
  const [isZoomed, setIsZoomed] = useState(false);
  const controls = useDragControls();
  const isMobile = window.innerWidth <= 768;
  const [panelHeight, setPanelHeight] = useState(isMobile ? window.innerHeight * 0.55 : 490);

  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const imageWidth = 676;
  const imageHeight = 852;

  const [isDateOpen, setIsDateOpen] = useState(false);
  const [selectedDay, setSelectedDay] = useState('수요일 낮');

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
  const [isLoading, setIsLoading] = useState(true);

  const [foodTruckData, setFoodTruckData] = useState(null);

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

      const matchesType = Array.isArray(booth.boothType) && booth.boothType.some((type) => selectedTags.includes(type));
      const matchesOperator = booth.boothOperator && selectedTags.includes(booth.boothOperator);

      return matchesType || matchesOperator;
    });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/booths/all`)

      .then((res) => {
        const boothData = res.data?.data?.booths || [];
        setBooths(boothData);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error('부스 데이터 불러오기 실패:', err);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/booths/food-truck`)

      .then((res) => {
        console.log('푸드트럭 데이터:', res.data);
        const foodData = res.data?.data?.foodTrucks || [];
        setFoodTruckData(foodData);
      })
      .catch((err) => {
        console.error('푸드트럭 데이터 불러오기 실패:', err);
      });
  }, []);

  const [selectedBooth, setSelectedBooth] = useState(null);
  const [activeMarkerId, setActiveMarkerId] = useState(null);
  const [showPanel, setShowPanel] = useState(true);
  const [isFoodTruckActive, setIsFoodTruckActive] = useState(false);

  useEffect(() => {
    if (!isZoomed) {
      setIsFoodTruckActive(false);
    }
  }, [isZoomed]);

  const handleBoothClick = (boothId, boothRole) => {
    if (boothRole === 'FOOD_TRUCK') {
      setIsFoodTruckActive(true);
      setSelectedBooth(null);
      setActiveMarkerId(null);
      setShowPanel(true);
    } else {
      const target = booths.find((b) => b.id === boothId);
      if (target) {
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

  return (
    <M.Map>
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
      />
      <>
        <M.ZoomButtonWrapper onClick={closeDetail}>
          <M.ZoomButton onClick={() => setIsZoomed(false)} disabled={!isZoomed}>
            <M.Minus src={isZoomed ? MinusB : Minus} alt="-" />
          </M.ZoomButton>

          <M.ZoomButton onClick={() => setIsZoomed(true)} disabled={isZoomed}>
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
                onClick={() => {
                  setSelectedDay(day);
                  setIsDateOpen(false);
                }}
                style={{ fontWeight: selectedDay === day ? 600 : 400 }}>
                {day}
              </M.DateOption>
            ))}
          </M.DateDropdown>
        )}
      </>

      {showPanel && (
        <SlidingPanelSection
          panelHeight={panelHeight}
          setPanelHeight={setPanelHeight}
          controls={controls}
          selectedTags={selectedTags}
          handleTagClick={handleTagClick}
          filteredBooths={isFoodTruckActive ? [] : filteredBooths}
          foodTruckData={isFoodTruckActive ? foodTruckData : null}
          isFoodTruckActive={isFoodTruckActive}
        />
      )}

      {selectedBooth && (
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
//
