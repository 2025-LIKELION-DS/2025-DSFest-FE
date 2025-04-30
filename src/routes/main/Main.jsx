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
            <M.Menu>MAP</M.Menu>
          </M.ImgMarginDiv>
        </M.Div>

        <M.DivMargin>
          <M.ImgEndDiv onClick={() => handleMenuClick('/notice')}>
            <M.NoticeImg />
            <M.Menu>NOTICE</M.Menu>
          </M.ImgEndDiv>

          <M.ImgEndDiv onClick={() => handleMenuClick('/review')}>
            <M.ReviewImg />
            <M.Menu>REVIEW</M.Menu>
          </M.ImgEndDiv>
        </M.DivMargin>

        <M.ImgTopMarginDiv onClick={() => handleMenuClick('puzzle')}>
          <M.PuzzleGameImg />
          <M.MenuPurple>PUZZLE GAME</M.MenuPurple>
        </M.ImgTopMarginDiv>
      </M.MainDiv>
    </M.Main>
  );
}

export default Main;
