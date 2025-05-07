import * as S from '@main/components/SplashStyle';

import Close from '@assets/main/icon-x.svg';
import Logo from '@assets/main/title-yeoun-white.png';
import Arrow from '@assets/main/icon-arrow.svg';

const Splash = ({ onClickHideSplash }) => {
  return (
    <S.Splash>
      <div onClick={onClickHideSplash}>
        <S.CloseImg src={Close} alt="닫기" />
      </div>

      <S.ImgDiv>
        <S.LogoDiv>
          <S.LogoImg src={Logo} alt="로고" />
        </S.LogoDiv>
        <div>
          <S.ArrowImg src={Arrow} alt="화살표" />
        </div>
        <S.Text>
          축제 로고를 눌러
          <br /> <span>랜덤으로 부스를 추천</span>받아보세요
        </S.Text>
      </S.ImgDiv>
    </S.Splash>
  );
};

export default Splash;
