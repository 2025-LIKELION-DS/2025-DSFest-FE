import * as M from '@main/MainStyle';

import Moon from '@assets/main/moon-crescent.png';
import Logo from '@assets/main/title-yeoun.png';
import Cloud from '@assets/main/cloud-textured-purple_80_.png';
import Tree from '@assets/main/tree-shadow-grain_80_.png';

function Main() {
  return (
    <M.Main>
      <M.MoonImg src={Moon} alt="달" />
      <M.LogoImg src={Logo} alt="로고" />
      <M.TreeImg src={Tree} alt="나무" />
      <M.CloudImg src={Cloud} alt="구름" />
    </M.Main>
  );
}

export default Main;
