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
        <S.CenterDiv>
          <S.ArrowDiv>
            <img src={Arrow} alt="화살표" />
          </S.ArrowDiv>
          <S.Text>
            축제 로고를 눌러
            <br /> <span>랜덤으로 부스를 추천</span>받아보세요
          </S.Text>
        </S.CenterDiv>
      </S.ImgDiv>
    </S.Splash>
  );
};

export default Splash;
