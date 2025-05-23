import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from '@main/MainStyle';

import ToastMsg from '@main/components/ToastMsg';
import Splash from '@main/components/Splash';

import MoonDay1 from '@assets/main/main-moon-day1.png';
import MoonDay2 from '@assets/main/main-moon-day2.png';
import MoonDay3 from '@assets/main/main-moon-day3.png';

import Logo from '@assets/main/title-yeoun.png';

import CloudDay1 from '@assets/main/main-cloud-day1.png';
import CloudDay2 from '@assets/main/main-cloud-day2.png';
import CloudDay3 from '@assets/main/main-cloud-day3.png';

import TreeDay1 from '@assets/main/main-tree-day1.png';
import TreeDay2 from '@assets/main/main-tree-day2.png';
import TreeDay3 from '@assets/main/main-tree-day3.png';

import BackGroundDay1 from '@assets/main/main-background-day1.png';
import BackGroundDay2 from '@assets/main/main-background-day2.png';
import BackGroundDay3 from '@assets/main/main-background-day3.png';

import BOOTH from '@data/booths.json';

function Main() {
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);
  const [isToastVisible, setIsToastVisible] = useState(false);

  const [firstVisit, setFirstVisit] = useState(() => {
    const hasVisited = localStorage.getItem('hasVisited');
    return !hasVisited; // 방문한 적 없으면 return true
  });

  const [resizeKey, setResizeKey] = useState(0);

  // 날짜마다 다르게 렌더링
  const [moonImg, setMoonImg] = useState(MoonDay1);
  const [treeImg, setTreeImg] = useState(TreeDay1);
  const [cloudImg, setCloudImg] = useState(CloudDay1);
  const [backgroundImg, setBackgroundImg] = useState(BackGroundDay1);

  const [booths, setBooths] = useState([]);
  const [random, setRandom] = useState(''); // 랜덤 부스명

  const date = new Date();
  const festDay1 = new Date(2025, 4, 14);
  const festDay2 = new Date(2025, 4, 15);
  const festDay3 = new Date(2025, 4, 16);

  // 00:00:00으로 초기화
  const toDateOnly = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

  // 00:00:00으로 초기화된 날짜
  const today = toDateOnly(date);
  const day1 = toDateOnly(festDay1);
  const day2 = toDateOnly(festDay2);
  const day3 = toDateOnly(festDay3);

  const handleMenuClick = (path) => {
    navigate(path);
  };

  const handleShowToast = () => {
    if (isToastVisible) return;

    if (booths.length > 0) {
      const newRandom = pickRandomBooth(booths);
      setRandom(newRandom);
    }

    setShowToast(true);
    setIsToastVisible(true);

    setTimeout(() => {
      setShowToast(false); // 3초 후 토스트 숨기기
      setIsToastVisible(false);
    }, 3000);
  };

  const onClickHideSplash = () => {
    localStorage.setItem('hasVisited', true);
    setFirstVisit(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(min-width: 768px) and (hover: hover) and (pointer: fine) and (min-height: 852px)',
    );

    // 조건 안 맞으면 리사이즈 X
    if (!mediaQuery.matches) return;

    // 창 크기 변경시 리렌더링 -> 미디어 쿼리 만족할 때에만
    const onResize = () => {
      if (!mediaQuery.matches) {
        return; // 조건 안 맞으면 리사이즈 X
      }

      setResizeKey((k) => k + 1);
    };

    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // 날짜마다 다르게 렌더링
  useEffect(() => {
    const updateImg = () => {
      if (today.getTime() === day2.getTime()) {
        // 5월 15일은 Day2 이미지로
        setMoonImg(MoonDay2);
        setTreeImg(TreeDay2);
        setCloudImg(CloudDay2);
        setBackgroundImg(BackGroundDay2);
      } else if (today.getTime() === day3.getTime()) {
        // 5월 16일은 Day3 이미지로
        setMoonImg(MoonDay3);
        setTreeImg(TreeDay3);
        setCloudImg(CloudDay3);
        setBackgroundImg(BackGroundDay3);
      } else {
        // 이외에는 Day1 이미지로
        setMoonImg(MoonDay1);
        setTreeImg(TreeDay1);
        setCloudImg(CloudDay1);
        setBackgroundImg(BackGroundDay1);
      }
    };

    updateImg();
  }, []);

  useEffect(() => {
    const getBoothList = async () => {
      try {
        const boothData = BOOTH.data.booths;
        const boothNameList = boothData.filter((booth) => {
          return booth.boothRole === 'BOOTH';
        });
        setBooths(boothNameList);
      } catch (error) {
        console.error(error);
      }
    };
    getBoothList();
  }, []);

  // 요일/시간 리턴
  const getCurrentLabel = () => {
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    let dayLabel = '';
    let timeLabel = '';

    const isBefore1430 = hour < 14 || (hour === 14 && minute < 30);

    if (today.getTime() === day1.getTime()) {
      dayLabel = '수요일';
      timeLabel = isBefore1430 ? '낮' : '밤';
    } else if (today.getTime() === day2.getTime()) {
      dayLabel = '목요일';
      timeLabel = isBefore1430 ? '낮' : '밤';
    } else if (today.getTime() === day3.getTime()) {
      dayLabel = '금요일';
      timeLabel = isBefore1430 ? '낮' : '밤';
    } else {
      return null;
    }

    return { day: dayLabel, time: timeLabel };
  };

  // 랜덤으로 부스명 리턴
  const pickRandomBooth = (boothList) => {
    const current = getCurrentLabel();
    if (current) {
      const matched = booths.filter((booth) => {
        return booth.schedules.some((s) => s.day === current.day && s.time === current.time);
      });
      if (matched.length > 0) {
        return matched[Math.floor(Math.random() * matched.length)].boothName;
      }
    }
    // 축제 전 or 이후에는 전체 부스 대상으로 랜덤 추천
    return boothList[Math.floor(Math.random() * boothList.length)].boothName;
  };

  return (
    <>
      <M.Main key={resizeKey} $backgroundImg={backgroundImg}>
        {firstVisit && <Splash onClickHideSplash={onClickHideSplash} />}

        {showToast && <ToastMsg boothName={random} />}

        <M.MoonImg src={moonImg} alt="달" />
        <M.TreeDiv>
          <M.TreeImg src={treeImg} alt="나무" />
        </M.TreeDiv>
        <M.CloudImg src={cloudImg} alt="구름" />

        <M.MainDiv>
          <M.LogoDiv>
            <M.LogoImg src={Logo} alt="로고" onClick={handleShowToast} />
          </M.LogoDiv>
          <M.Div>
            <M.ImgDiv onClick={() => handleMenuClick('/timetable')}>
              <M.TimeTableImg />
              <M.Menu>
                TIME
                <br />
                TABLE
              </M.Menu>
            </M.ImgDiv>

            <M.ImgMarginDiv onClick={() => handleMenuClick('/map')}>
              <M.MapImg />
              <M.MapMenu>MAP</M.MapMenu>
            </M.ImgMarginDiv>
          </M.Div>

          <M.DivMargin>
            <M.ImgEndDiv onClick={() => handleMenuClick('/notice')}>
              <M.NoticeImg />
              <M.NoticeMenu>NOTICE</M.NoticeMenu>
            </M.ImgEndDiv>

            <M.ImgEndMarginDiv onClick={() => handleMenuClick('/review')}>
              <M.ReviewImg />
              <M.ReviewMenu>REVIEW</M.ReviewMenu>
            </M.ImgEndMarginDiv>
          </M.DivMargin>

          <M.ImgTopMarginDiv onClick={() => handleMenuClick('puzzle')}>
            <M.PuzzleGameImg />
            <M.PuzzleMenu>PUZZLE GAME</M.PuzzleMenu>
          </M.ImgTopMarginDiv>
        </M.MainDiv>
      </M.Main>
    </>
  );
}

export default Main;
