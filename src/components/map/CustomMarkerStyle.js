import styled from 'styled-components';
import palette from '@styles/theme';

export const MarkerImage = styled.img`
  position: absolute;
  z-index: ${(props) => (props.isActive ? 2 : 'auto')};
  cursor: pointer;
  user-select: none;
  pointer-events: auto;
  top: ${({ top, isActive }) => (top ? `${isActive ? 'auto' : '3px'}` : 'auto')};
  left: ${({ left, isActive }) => (left ? `${isActive ? 'auto' : '4px'}` : 'auto')};
  right: ${({ right, isActive }) => (right ? `${isActive ? 'atuo' : '7px'}` : 'auto')};
  width: ${({ isActive }) => `${isActive ? '30px' : '11px'}`};
  height: ${({ isActive }) => `${isActive ? '30px' : '11px'}`};
  padding: ${({ isActive }) => (isActive ? undefined : '6px')};
`;

export const Wrapper = styled.div`
  position: absolute;
  top: ${({ top, isActive }) => (top ? `calc(${top} + ${isActive ? '-7px' : '0px'})` : 'auto')};
  left: ${({ left, isActive }) => (left ? `calc(${left} + ${isActive ? '15px' : '0px'})` : 'auto')};
  right: ${({ right, isActive }) => (right ? `calc(${right} + ${isActive ? '18px' : '0px'})` : 'auto')};
  z-index: ${({ isActive }) => (isActive ? 2 : 'auto')};
  display: flex;
  flex-direction: column;
  align-items: center;
  pointer-events: auto;
  width: 2px;
  height: auto;
`;

export const Bubble = styled.div`
  border-radius: 4px;
  border: 1px solid ${({ isHint }) => (isHint ? '#E87375' : palette.violet.violet500)};
  background: ${palette.grayscale.white};
  padding: 2px 6px;
  font-size: 12px;
  margin-bottom: 4px;
  white-space: nowrap;
  margin-top: -26px;
  height: 21px;
  display: flex;
  align-items: center;
`;
