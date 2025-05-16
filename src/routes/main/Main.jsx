import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from '@main/MainStyle';

import ToastMsg from '@main/components/ToastMsg';
import Splash from '@main/components/Splash';

import MoonDay1 from '@assets/main/main-moon-day1.png';
import MoonDay2 from '@assets/main/main-moon-day2.png';
import MoonDay3 from '@assets/main/main-moon-day3.png';

import Logo from '@assets/main/icon-title-yeoun.svg';

import CloudDay1 from '@assets/main/main-cloud-day1.png';
import CloudDay2 from '@assets/main/main-cloud-day2.png';
import CloudDay3 from '@assets/main/main-cloud-day3.png';

import TreeDay1 from '@assets/main/main-tree-day1.png';
import TreeDay2 from '@assets/main/main-tree-day2.png';
import TreeDay3 from '@assets/main/main-tree-day3.png';

import BackGroundDay1 from '@assets/main/main-background-day1.png';
import BackGroundDay2 from '@assets/main/main-background-day2.png';
import BackGroundDay3 from '@assets/main/main-background-day3.png';

const BOOTH = {
  booths: [
    {
      id: 1,
      boothName: '부스 이름이 길면 이런식으로 2줄 작성',
      boothOperator: 'CLUB',
      boothIntroduce: '맛있는 핫도그를 판매합니다.',
      boothType: ['SALE'],
      boothDay: 'WED',
      boothTime: 'AFTERNOON',
      boothSite: 'https:hihi.site',
    },
    {
      id: 2,
      boothName: '멋쟁이사자처럼',
      boothOperator: 'CLUB',
      boothIntroduce: '맛있는 핫도그를 판매합니다.',
      boothType: ['SALE', 'ETC'],
      boothDay: 'WED',
      boothTime: 'AFTERNOON',
      boothSite: null, // 없으면 null
    },
    {
      id: 3,
      boothName: '총학생회 수익사업 부스',
      boothOperator: 'CLUB',
      boothIntroduce: '맛있는 핫도그를 판매합니다.',
      boothType: ['SALE', 'ETC'],
      boothDay: 'WED',
      boothTime: 'AFTERNOON',
      boothSite: null, // 없으면 null
    },
    {
      id: 4,
      boothName: '필소굿: 필름소피굿즈 팝니다',
      boothOperator: 'CLUB',
      boothIntroduce: '맛있는 핫도그를 판매합니다.',
      boothType: ['SALE', 'ETC'],
      boothDay: 'WED',
      boothTime: 'AFTERNOON',
      boothSite: null, // 없으면 null
    },
    {
      id: 5,
      boothName: '건축봉사동아리 "지음" 페이스페인팅',
      boothOperator: 'CLUB',
      boothIntroduce: '맛있는 핫도그를 판매합니다.',
      boothType: ['SALE', 'ETC'],
      boothDay: 'WED',
      boothTime: 'AFTERNOON',
      boothSite: null, // 없으면 null
    },
    {
      id: 6,
      boothName: '[Whd발신] 자기야, 농구하러 올래?',
      boothOperator: 'CLUB',
      boothIntroduce: '맛있는 핫도그를 판매합니다.',
      boothType: ['SALE', 'ETC'],
      boothDay: 'WED',
      boothTime: 'AFTERNOON',
      boothSite: null, // 없으면 null
    },
  ],
};

function Main() {
  const navigate = useNavigate();
  const randomBooth = BOOTH.booths[Math.floor(Math.random() * BOOTH.booths.length)];

  const [showToast, setShowToast] = useState(false);
  const timeRef = useRef(null);

  const [firstVisit, setFirstVisit] = useState(() => {
    const hasVisited = sessionStorage.getItem('hasVisited');
    return !hasVisited; // 방문한 적 없으면 return true
  });

  const [resizeKey, setResizeKey] = useState(0);

  // 날짜마다 다르게 렌더링
  const [moonImg, setMoonImg] = useState(MoonDay1);
  const [treeImg, setTreeImg] = useState(TreeDay1);
  const [cloudImg, setCloudImg] = useState(CloudDay1);
  const [backgroundImg, setBackgroundImg] = useState(BackGroundDay1);

  const handleMenuClick = (path) => {
    navigate(path);
  };

  const handleShowToast = () => {
    // 이전에 설정된 타이머 있다면 취소
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    setShowToast(true);
  };

  const onClickHideSplash = () => {
    sessionStorage.setItem('hasVisited', true);
    setFirstVisit(false);
  };

  useEffect(() => {
    // 창 크기 변경시 리렌더링
    const onResize = () => {
      setResizeKey((k) => k + 1);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // 날짜마다 다르게 렌더링
  useEffect(() => {
    const updateImg = () => {
      const date = new Date();
      const festDay1 = new Date(2025, 4, 14);
      const festDay2 = new Date(2025, 4, 15);
      const festDay3 = new Date(2025, 4, 16);

      const toDateOnly = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

      const today = toDateOnly(date);
      const day1 = toDateOnly(festDay1);
      const day2 = toDateOnly(festDay2);
      const day3 = toDateOnly(festDay3);

      if (today.getTime() <= day1.getTime()) {
        // 5월 14일 이전은 Day1 이미지로
        setMoonImg(MoonDay1);
        setTreeImg(TreeDay1);
        setCloudImg(CloudDay1);
        setBackgroundImg(BackGroundDay1);
      } else if (today.getTime() === day2.getTime()) {
        setMoonImg(MoonDay2);
        setTreeImg(TreeDay2);
        setCloudImg(CloudDay2);
        setBackgroundImg(BackGroundDay2);
      } else if (today.getTime() >= day3.getTime()) {
        // 5월 16일 이후로는 Day3 이미지로
        setMoonImg(MoonDay3);
        setTreeImg(TreeDay3);
        setCloudImg(CloudDay3);
        setBackgroundImg(BackGroundDay3);
      }
    };

    updateImg();

    const interval = setInterval(() => {
      updateImg();
    }, 5000); // 5초마다 반복되게

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <M.Main key={resizeKey} $backgroundImg={backgroundImg}>
        {firstVisit && <Splash onClickHideSplash={onClickHideSplash} />}

        {showToast && <ToastMsg boothName={randomBooth.boothName} onClose={() => setShowToast(false)} />}

        <M.MoonImg src={moonImg} alt="달" />
        <M.LogoImg src={Logo} alt="로고" onClick={handleShowToast} />
        <M.TreeImg src={treeImg} alt="나무" />
        <M.CloudImg src={cloudImg} alt="구름" />

        <M.MainDiv>
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
