import { useNavigate } from 'react-router-dom';
import * as H from '@admin/HomeStyle';
import * as L from '@admin/LoginStyle';
import Button from '@components/admin/ButtonAdminSingle/ButtonAdminSingle';
import palette from '@styles/theme';

function Home() {
  const navigate = useNavigate();

  return (
    <H.Home>
      <L.Title>축제 관계자 페이지</L.Title>
      <H.Area>
        <Button text="공지사항" color={palette.grayscale.white} onClick={() => navigate('/notice')} />
        <Button
          text="퍼즐 QR 및 비밀번호 생성"
          color={palette.grayscale.white}
          onClick={() => navigate('/admin/puzzle')}
        />
        <Button
          text="퍼즐 QR 및 비밀번호 목록"
          color={palette.grayscale.white}
          onClick={() => navigate('/admin/puzzle/new')}
        />
      </H.Area>
    </H.Home>
  );
}

export default Home;
