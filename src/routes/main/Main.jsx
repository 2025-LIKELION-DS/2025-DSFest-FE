import * as M from '@main/MainStyle';

import Moon from '@assets/main/moon-crescent.png';
import Logo from '@assets/main/title-yeoun.png';
import Cloud from '@assets/main/cloud-textured-purple_80_.png';
import Tree from '@assets/main/tree-shadow-grain_80_.png';
import { useNavigate } from 'react-router-dom';

function Main() {
  const navigate = useNavigate();

  const handleMenuClick = (path) => {
    navigate(path);
  };

  return (
    <M.Main>
      <M.MoonImg src={Moon} alt="달" />
      <M.LogoImg src={Logo} alt="로고" />
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

          <M.ImgEndDiv onClick={() => handleMenuClick('/review')}>
            <M.ReviewImg />
            <M.ReviewMenu>REVIEW</M.ReviewMenu>
          </M.ImgEndDiv>
        </M.DivMargin>

        <M.ImgTopMarginDiv onClick={() => handleMenuClick('puzzle')}>
          <M.PuzzleGameImg />
          <M.PuzzleMenu>PUZZLE GAME</M.PuzzleMenu>
        </M.ImgTopMarginDiv>
      </M.MainDiv>
    </M.Main>
  );
}

export default Main;
