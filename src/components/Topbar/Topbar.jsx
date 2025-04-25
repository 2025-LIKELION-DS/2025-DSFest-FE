import * as T from "@components/Topbar/TopbarStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "@components/Sidebar/Sidebar";
import SidebarAdmin from "@components/Sidebar/SidebarAdmin";

import Left from "@assets/topbar/icon-left.svg";
import Menu from "@assets/topbar/icon-menu.svg";
import { isAdminLoggedIn } from "../../utils/admin";

/*
 * 페이지의 헤더를 나타내는 컴포넌트입니다.
 * 타이틀 내용을 받으며며, 어드민 로그인 여부 따라 사이드바 메뉴가 다르게 표시됩니다.
 * @param {string} title - 메뉴 이름
 */

const Topbar = ({ title }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isVisible, setIsvisible] = useState(false);
  const navigate = useNavigate();

  const isAdmin = isAdminLoggedIn();

  const openSidebar = () => {
    setSidebarOpen(true);
    setIsvisible(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
    setTimeout(() => {
      setIsvisible(false);
    }, 300);
  };

  const handleLeft = () => {
    if (isAdmin) navigate("/admin/menu");
    else navigate("/");
  };

  return (
    <T.Topbar>
      <T.TopbarSection>
        <T.Img src={Left} alt="뒤로 가기" onClick={handleLeft} />
        <T.Title>{title}</T.Title>
      </T.TopbarSection>

      <T.Img src={Menu} alt="메뉴" onClick={openSidebar} />

      {isVisible && !isAdmin && <Sidebar isSidebarOpen={isSidebarOpen} onClose={closeSidebar} />}

      {isVisible && isAdmin && <SidebarAdmin isSidebarOpen={isSidebarOpen} onClose={closeSidebar} />}
    </T.Topbar>
  );
};

export default Topbar;
