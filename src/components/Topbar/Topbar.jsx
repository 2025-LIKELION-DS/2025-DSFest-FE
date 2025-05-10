import * as T from '@components/Topbar/TopbarStyle';
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import Sidebar from '@components/Sidebar/Sidebar';
import SidebarAdmin from '@components/Sidebar/SidebarAdmin';

import Left from '@assets/topbar/icon-left.svg';
import Menu from '@assets/topbar/icon-menu.svg';
import { isAdminLoggedIn } from '@utils/admin';
import usePreviousPath from '@hooks/usePreviousPath';

/**
 * 페이지의 헤더를 나타내는 컴포넌트입니다.
 * 어드민 로그인 여부 따라 사이드바 메뉴가 다르게 표시됩니다.
 *
 * **/

const Topbar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isVisible, setIsvisible] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAdmin = isAdminLoggedIn();
  const prevPath = usePreviousPath();

  if (pathname === '/admin' || pathname === '/admin/menu' || pathname === '/notice/image' || pathname === '/') {
    return null;
  }

  const getTitle = (path) => {
    const hideTopbar = ['/admin'];
    if (hideTopbar.includes(path)) return null;

    switch (path) {
      case '/':
        return '메인';
      case '/map':
        return '지도';
      case '/puzzle':
        return '퍼즐게임';
      case '/review':
        return '후기';
      case '/timetable':
        return '타임테이블';
      case '/notice':
        return '공지사항';
      case '/notice/new':
        return '공지사항';
      case '/admin/puzzle':
        return '퍼즐 QR 및 비밀번호 목록';
      case '/admin/puzzle/new':
        return '퍼즐 QR 및 비밀번호 생성';
      case '/admin/puzzle/preview':
        return '퍼즐 QR 및 비밀번호 생성';
      default:
        // 동적 라우팅 처리
        if (/^\/notice\/\d+$/.test(path)) {
          return '공지사항';
        }
        if (/^\/notice\/\d+\/edit$/.test(path)) {
          return '공지사항';
        }
        return '';
    }
  };

  const pageTitle = getTitle(pathname);

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
    if (prevPath === '/camera') {
      navigate(-3);
    } else {
      navigate(-1);
    }
  };

  return (
    <T.Topbar $pathname={pathname}>
      <T.TopbarSection>
        <T.Img src={Left} alt="뒤로 가기" onClick={handleLeft} />
        <T.Title>{pageTitle}</T.Title>
      </T.TopbarSection>

      <T.Img src={Menu} alt="메뉴" onClick={openSidebar} />

      {isVisible && !isAdmin && <Sidebar isSidebarOpen={isSidebarOpen} onClose={closeSidebar} />}

      {isVisible && isAdmin && <SidebarAdmin isSidebarOpen={isSidebarOpen} onClose={closeSidebar} />}
    </T.Topbar>
  );
};

export default Topbar;
