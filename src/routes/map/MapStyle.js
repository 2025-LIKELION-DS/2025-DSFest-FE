import styled from 'styled-components';
import palette from '@styles/theme';
import { motion } from 'framer-motion';

export const SlidingPanel = styled(motion.div)`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  max-height: 92%;
  background-color: ${palette.grayscale.white};
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  box-shadow: 0px -4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  margin-top: -50px;
  overflow: hidden;
  background-color: #f4eef5;
`;

export const DraggableMapImage = styled(motion.img)`
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
  pointer-events: all;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Map = styled.div`
  font-family: Pretendard;
  margin: 0;
  padding: 0;
  position: relative;
  height: 94%;
  background: #f4eef5;
`;

export const TouchSection = styled.div``;

export const BarContainer = styled.div`
  display: flex;
  justify-content: center;

  margin: 0 0 23px;
`;

export const Bar = styled.div`
  width: 103px;
  height: 4px;
  flex-shrink: 0;

  border-radius: 2px;
  background: ${palette.grayscale.ef};
`;
export const BoothContentArea = styled.div`
  flex: 1;
  overflow-y: auto;
`;

export const BoothCard = styled.div`
  border-bottom: 1px solid ${palette.grayscale.df};
  padding: 16px 0;
  margin: 0 20px;

  &:first-child {
    border-top: 1px solid ${palette.grayscale.df};
  }
`;

export const BoothName = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  margin: 0 0 8px;
`;

export const BoothTags = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`;

export const Tag = styled.span`
  background-color: ${palette.grayscale.ef};
  display: flex;
  padding: 6px 10px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  border-radius: 16px;

  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
`;

export const ToggleImage = styled.img`
  width: 15px;
`;

export const DateWrapper = styled.div`
  display: flex;
  height: 32px;
  position: absolute;
  top: 15px;
  right: 20px;
  padding: 0 12px;
  border-radius: 16px;
  background-color: ${palette.grayscale.white};
  font-weight: bold;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);
  z-index: 4;

  justify-content: flex-end;
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
`;

export const ZoomButtonWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 18px;
  display: flex;
  gap: 8px;
  z-index: 4;
`;

export const ZoomButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);
  background-color: ${palette.grayscale.white};
  padding: 8px;
  color: ${palette.grayscale.black};
`;

export const Minus = styled.img``;
export const Plus = styled.img``;

export const DaySelectButton = styled.button`
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.3px;
  padding: 0 5px;
  color: ${palette.grayscale.black};
`;

export const TagFilterContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 4px 18px 16px;
  overflow-x: scroll;
  overflow-y: hidden;
  align-items: center;

  &::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const TagFilter = styled.button`
  padding: 8px 16px;
  border-radius: 16px;
  border: 1px solid ${({ $selected }) => ($selected ? palette.mainPurple : palette.grayscale.ca)};
  background: ${({ $selected }) => ($selected ? palette.mainPurple10 : palette.grayscale.white)};
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  height: 32px;
  color: ${palette.grayscale.black};
  align-items: center;
  text-align: center;
  display: flex;
`;

export const DateDropdown = styled.div`
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.15);
  z-index: 10;
  overflow: hidden;
`;

export const DateOption = styled.div`
  border-bottom: 1px solid ${palette.grayscale.ef};
  cursor: pointer;

  display: flex;
  width: 106px;
  padding: 6px 0px;
  flex-direction: column;
  align-items: center;

  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;

  &:hover {
    background-color: ${palette.grayscale.ef};
  }

  &:first-child {
    padding-top: 12px;
  }

  &:last-child {
    border-bottom: none;
    padding-bottom: 12px;
  }
`;

export const Marker = styled.img`
  position: absolute;
  width: 12px;
  height: 12px;
`;

export const Food = styled.img`
  position: absolute;
  width: 20px;
  height: 150px;
`;

export const DraggableGroup = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  user-select: none;
  pointer-events: all;
`;
