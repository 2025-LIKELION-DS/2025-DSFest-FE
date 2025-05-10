import styled, { keyframes } from 'styled-components';
import palette from '@styles/theme';

import SidebarBg from '@assets/sidebar/sidebar-background.png';

const slideLeft = keyframes`
  from {
    transform: translateX(221px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideRight = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(221px);
    opacity: 0;
  }
`;

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

  position: absolute;
  top: 0;
  right: 0;

  background-image: url(${SidebarBg});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;

  animation: ${(props) => (props.$isSidebarOpen ? slideLeft : slideRight)} 0.4s ease-in-out;
  transition: right 0.4s ease-in-out;

  display: flex;
  flex-direction: column;

  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 3px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    @media (min-height: 852px) {
      height: 852px;
    }
  }

  @media (max-height: 639px) {
    width: 100%;
    background-position: bottom right;
  }
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
  gap: 2vh;

  margin-left: 28px;
  margin-top: 24px;

  flex: 1;
  min-height: 232px;
`;

export const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  width: max-content;
  cursor: pointer;
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
  margin-bottom: 21px;
  margin-left: 19px;

  width: 183px;
  border-radius: 11px;
  background-color: ${palette.styles.white50};
  backdrop-filter: blur(7.5px);
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.25);

  padding: 9px 15px 19px;

  box-sizing: border-box;

  @media (max-height: 639px) {
    width: 100%;
    height: 199px;
    min-height: 200px;

    padding: 15px 18px;

    margin-bottom: 0;
    margin-left: 0;
  }
`;

export const InfoTitle = styled.p`
  margin: 0;

  color: ${palette.grayscale.text33};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.35px;
`;

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
  margin-top: 8px;

  @media (max-height: 639px) {
    flex: 1;
    gap: 15px;
  }
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

  margin-top: 21px;
`;

export const Part = styled.p`
  margin: 0;

  color: ${palette.grayscale.text33};
  font-size: 12px;
  font-weight: 600;
  letter-spacing: -0.3px;
`;

export const Name = styled.p`
  margin: 0;

  color: ${palette.grayscale.text33};
  font-size: 12px;
  font-weight: 400;
  line-height: 130%;
  letter-spacing: -0.3px;
`;

export const Footer = styled.div`
  display: flex;
  gap: 22px;
  margin-top: 3vh;

  @media (max-height: 639px) {
    margin-top: 0;
    padding-right: 6px;
  }
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
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

export const LogoImg = styled.div`
  width: 24px;
  height: 24px;

  > img {
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const Title = styled.div`
  max-width: 51px;
  width: 100%;
  height: 32px;

  cursor: pointer;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const FirstMenu = styled(Menu)`
  margin-top: 9px;
`;

export const InfoDiv = styled.div`
  @media (max-height: 639px) {
    display: flex;
    flex-direction: row-reverse;
  }
`;

export const Names = styled(NameList)`
  margin-top: 0;

  @media (max-height: 639px) {
    display: flex;
    flex-direction: row;
    gap: 20px;
    margin-top: -6px;
  }
`;

export const CopyRightDiv = styled.div`
  @media (max-height: 639px) {
    display: flex;
    gap: 4px;
    flex: 1;
  }
`;

export const InfoBox = styled.div`
  @media (max-height: 639px) {
    padding: 0 20px 20px;
  }
`;
