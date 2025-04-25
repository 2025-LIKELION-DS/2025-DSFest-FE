import styled from "styled-components";
import palette from "@styles/theme";

import SidebarBg from "@assets/sidebar/sidebar-background.png";

export const Overlay = styled.div`
  width: 100%;
  height: 100dvh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
`;

export const Sidebar = styled.div`
  box-sizing: border-box;
  width: 221px;
  height: 100dvh;
  background-color: ${palette.violet.violet50};

  z-index: 1000;

  position: fixed;
  top: 0;
  right: 0;

  background-image: url(${SidebarBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
