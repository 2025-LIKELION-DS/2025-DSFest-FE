import styled from 'styled-components';

import TimeTable from '@assets/main/time-table.svg?react';
import Map from '@assets/main/map.svg?react';
import Notice from '@assets/main/notice.svg?react';
import Review from '@assets/main/review.svg?react';
import PuzzleGame from '@assets/main/puzzle-game.svg?react';

export const Main = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;

  position: relative;

  display: flex;
  flex-direction: column;
  isolation: isolate;
`;

export const MoonImg = styled.img`
  position: absolute;
  top: 54px;
  right: 27px;
`;

export const LogoDiv = styled.div`
  width: 90px;
  height: 57px;
  margin: 0 auto;
  margin-bottom: 45px;
`;

export const LogoImg = styled.img`
  cursor: pointer;
  width: 100%;
  height: auto;
  object-fit: contain;
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

export const TimeTableImg = styled(TimeTable)`
  g {
    cursor: pointer;
  }
`;

export const MapImg = styled(Map)`
  g {
    cursor: pointer;
  }
`;

export const NoticeImg = styled(Notice)`
  g {
    cursor: pointer;
  }
`;

export const ReviewImg = styled(Review)`
  g {
    cursor: pointer;
  }
`;

export const PuzzleGameImg = styled(PuzzleGame)`
  g {
    cursor: pointer;
  }
`;

export const MainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  flex: 1;

  position: relative;
`;

export const ImgDiv = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  transform: scale(1);
  opacity: 1;

  transition:
    transform 0.5s ease-in-out,
    opacity 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05) translateZ(0);
    opacity: 0.95;
  }

  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    @media (min-height: 852px) {
      will-change: transform;
      backface-visibility: hidden;
      transform-style: preserve-3d;
    }
  }
`;

export const ImgEndDiv = styled(ImgDiv)`
  align-items: flex-end;
`;

export const ImgEndMarginDiv = styled(ImgEndDiv)`
  margin-left: -6px;
`;

export const ImgMarginDiv = styled(ImgDiv)`
  margin-left: -6px;
`;

export const ImgTopMarginDiv = styled(ImgDiv)`
  margin-top: -6px;
`;

export const Menu = styled.p`
  margin: 0;
  position: absolute;
  top: 40px;
  left: 38px;
  text-align: center;

  cursor: pointer;

  font-family: AppleSDGothicNeo;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MapMenu = styled(Menu)`
  top: 52px;
  left: 46px;
`;

export const NoticeMenu = styled(Menu)`
  top: auto;
  bottom: 52px;
  left: 30px;
`;

export const ReviewMenu = styled(Menu)`
  top: auto;
  bottom: 52px;
  left: 51px;
`;

export const PuzzleMenu = styled(Menu)`
  top: 47.5px;
  left: 77px;

  color: #4e3b86;
`;

export const Div = styled.div`
  display: flex;
`;

export const DivMargin = styled(Div)`
  margin-top: -24px;
`;
