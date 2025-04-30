import styled from 'styled-components';
import palette from '@styles/theme';

import BackGround from '@assets/main/puzzle-scene-stars-grain.jpg';

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${BackGround});
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;
`;

export const MoonImg = styled.img`
  position: absolute;
  top: 54px;
  right: 27px;
`;

export const LogoImg = styled.img`
  display: block;
  margin: 0 auto;
  padding-top: 23.7%;
`;

export const CloudImg = styled.img`
  position: absolute;
  bottom: 0;
`;

export const TreeImg = styled.img`
  position: absolute;
  right: 0;
  bottom: 0;
`;
