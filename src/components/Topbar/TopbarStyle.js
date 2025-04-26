import styled from 'styled-components';
import palette from '@styles/theme';

export const Topbar = styled.div`
  box-sizing: border-box;

  position: sticky;
  top: 0;

  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 56px;
  padding: 0px 20px;

  background-color: ${palette.grayscale.white80};
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(8px);

  z-index: 999;

  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    width: 393px;
  }
`;

export const TopbarSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.p`
  margin: 0;
  color: ${palette.grayscale.text33};

  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const Img = styled.img`
  cursor: pointer;
`;
