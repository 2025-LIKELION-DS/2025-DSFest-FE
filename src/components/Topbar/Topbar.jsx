import * as T from "@components/Topbar/TopbarStyle";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Sidebar from "@components/Sidebar/Sidebar";
import SidebarAdmin from "@components/Sidebar/SidebarAdmin";

import Left from "@assets/topbar/icon-left.svg";
import Menu from "@assets/topbar/icon-menu.svg";

/*
 * 페이지의 헤더를 나타내는 컴포넌트입니다.
 * 타이틀과 어드민 로그인 여부를 받으며, 어드민 로그인 여부 따라 사이드바 메뉴가 다르게 표시됩니다.
 * @param {string} title - 메뉴 이름
 * @param {boolean} iaAdmin - 어드민 로그인 여부
 */

const Topbar = ({ title, isAdmin }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <T.Topbar>
      <T.TopbarSection>
        <T.Img src={Left} alt="뒤로 가기" onClick={() => navigate("/")} />
        <T.Title>{title}</T.Title>
      </T.TopbarSection>

      <T.Img src={Menu} alt="메뉴" onClick={() => setSidebarOpen((prev) => !prev)} />

      {isSidebarOpen && !isAdmin && <Sidebar isSidebarOpen={isSidebarOpen} />}

      {isSidebarOpen && isAdmin && <SidebarAdmin isSidebarOpen={isSidebarOpen} />}
    </T.Topbar>
  );
};

export default Topbar;
