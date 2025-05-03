import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as M from '@main/MainStyle';

import ToastMsg from '@main/components/ToastMsg';
import Splash from '@main/components/Splash';

import Moon from '@assets/main/moon-crescent.png';
import Logo from '@assets/main/icon-title-yeoun.svg';
import Cloud from '@assets/main/cloud-textured-purple_80_.png';
import Tree from '@assets/main/tree-shadow-grain_80_.png';

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

  return (
    <>
      <M.Main key={resizeKey}>
        {firstVisit && <Splash onClickHideSplash={onClickHideSplash} />}

        {showToast && <ToastMsg boothName={randomBooth.boothName} onClose={() => setShowToast(false)} />}

        <M.MoonImg src={Moon} alt="달" />
        <M.LogoImg src={Logo} alt="로고" onClick={handleShowToast} />
        <M.TreeImg src={Tree} alt="나무" />
        <M.CloudImg src={Cloud} alt="구름" />

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
