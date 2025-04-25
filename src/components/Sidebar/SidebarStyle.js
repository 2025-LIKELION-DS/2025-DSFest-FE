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

export const Close = styled.div`
  display: flex;
  justify-content: flex-end;

  margin-top: 16px;
  margin-right: 20px;

  > img {
    cursor: pointer;
  }
`;

export const MenuList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;

  margin-left: 28px;

  margin-top: 43px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const MenuTitle = styled.p`
  margin: 0;

  cursor: pointer;

  color: ${palette.grayscale.text33};
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Info = styled.div`
  margin-top: 200px;
  margin-left: 19px;

  width: 183px;
  height: 328px;
  border-radius: 11px;
  background-color: ${palette.styles.white50};
  backdrop-filter: blur(7.5px);

  padding: 9px 15px;

  box-sizing: border-box;
`;

export const InfoTitle = styled.p`
  margin: 0;

  color: ${palette.grayscale.text33};
  font-size: 14px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.35px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 8px;
`;

export const Line = styled.div`
  width: 3px;
  height: 28px;
  background-color: ${palette.grayscale.black50};
  border-radius: 999px;
`;

export const NameList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  margin-top: 19px;
`;

export const Part = styled.p`
  margin: 0;

  color: ${palette.grayscale.text33};
  font-size: 12px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const Name = styled.p`
  margin: 0;

  color: ${palette.grayscale.text33};
  font-size: 12px;
  font-weight: 300;
  line-height: 130%;
  letter-spacing: -0.3px;
`;

export const Footer = styled.div`
  display: flex;
  gap: 22px;
  margin-top: 38px;
`;

export const CopyRight = styled.p`
  margin: 0;

  color: ${palette.grayscale.text88};
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.25px;
`;

export const SNSContainer = styled.div`
  display: flex;
  gap: 5px;

  > img {
    width: 18px;
    height: 18px;
  }
`;
