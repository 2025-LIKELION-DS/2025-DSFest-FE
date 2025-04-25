import * as H from "@components/Topbar/TopbarStyle";
import { useState } from "react";

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

  return (
    <>
      <div>
        <img src={Left} alt="뒤로 가기" />
      </div>
      <div>{title}</div>
      <div onClick={() => setSidebarOpen((prev) => !prev)}>
        <img src={Menu} alt="메뉴" />
      </div>
      {isSidebarOpen && !isAdmin && <Sidebar />}
      {isSidebarOpen && isAdmin && <SidebarAdmin />}
    </>
  );
};

export default Topbar;
