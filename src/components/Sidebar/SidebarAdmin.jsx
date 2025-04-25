import * as S from "@components/Sidebar/SidebarStyle";
import * as S2 from "@components/Sidebar/SidebarAdminStyle";
import { useNavigate } from "react-router-dom";

import Close from "@assets/sidebar/icon-close.svg";
import Logout from "@assets/admin/icon-logout.svg";

const SidebarAdmin = ({ isSidebarOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };
  return (
    <>
      <S.Overlay onClick={onClose} />
      <S2.Sidebar $isSidebarOpen={isSidebarOpen}>
        <S.Close onClick={onClose}>
          <img src={Close} alt="닫기" />
        </S.Close>

        <S.MenuList>
          <S.Menu onClick={() => handleLinkClick("notice/new")}>
            <S.MenuTitle>공지사항</S.MenuTitle>
          </S.Menu>

          <S.Menu onClick={() => handleLinkClick("booth/new")}>
            <S.MenuTitle>부스 QR 및 비밀번호 생성</S.MenuTitle>
          </S.Menu>

          <S.Menu onClick={() => handleLinkClick("booth")}>
            <S.MenuTitle>부스 QR 및 비밀번호 목록</S.MenuTitle>
          </S.Menu>
        </S.MenuList>

        <S2.Logout>
          <img src={Logout} alt="로그아웃" />
          <S2.LogoutText>로그아웃</S2.LogoutText>
        </S2.Logout>
      </S2.Sidebar>
    </>
  );
};

export default SidebarAdmin;
