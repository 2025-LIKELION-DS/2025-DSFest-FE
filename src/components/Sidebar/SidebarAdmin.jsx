import * as S from '@components/Sidebar/SidebarStyle';
import * as S2 from '@components/Sidebar/SidebarAdminStyle';
import { useNavigate } from 'react-router-dom';

import Close from '@assets/sidebar/icon-close.svg';
import Logout from '@assets/admin/icon-logout.svg';
import { logoutAdmin } from '@utils/admin';

const SidebarAdmin = ({ isSidebarOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    onClose();
  };

  const handleLogout = () => {
    logoutAdmin();
    navigate('/admin');
  };

  return (
    <>
      <S.Overlay onClick={onClose} />
      <S2.Sidebar $isSidebarOpen={isSidebarOpen}>
        <S.Close onClick={onClose}>
          <img src={Close} alt="닫기" />
        </S.Close>

        <S.MenuList>
          <S.Menu onClick={() => handleLinkClick('/admin/menu')}>
            <S2.MenuTitle>축제 관계자 페이지</S2.MenuTitle>
          </S.Menu>

          <S2.MenuList>
            <S.Menu onClick={() => handleLinkClick('/notice/new')}>
              <S.MenuTitle>공지사항</S.MenuTitle>
            </S.Menu>

            <S.Menu onClick={() => handleLinkClick('/admin/puzzle/new')}>
              <S.MenuTitle>퍼즐 QR 및 비밀번호 생성</S.MenuTitle>
            </S.Menu>

            <S.Menu onClick={() => handleLinkClick('/admin/puzzle')}>
              <S.MenuTitle>퍼즐 QR 및 비밀번호 목록</S.MenuTitle>
            </S.Menu>
          </S2.MenuList>
        </S.MenuList>

        <S2.Logout onClick={handleLogout}>
          <img src={Logout} alt="로그아웃" />
          <S2.LogoutText>로그아웃</S2.LogoutText>
        </S2.Logout>
      </S2.Sidebar>
    </>
  );
};

export default SidebarAdmin;
