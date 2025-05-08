import React from 'react';
import styled from 'styled-components';
import palette from '@styles/theme';

const EntranceLineWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => `${top - 4}px`};
  left: 75%;
  transform: translateX(-50%);
  width: 50%;
  font-size: clamp(9px, 1.2vw, 11px);
  color: ${palette.grayscale.text33};
  pointer-events: none;
  z-index: 10000;

  /* 서서히 나타나도록 */
  opacity: 0;
  transform: translateX(-50%) translateY(10px);
  animation: fadeInUp 0.5s ease-out forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }
`;

const TopLine = styled.div`
  position: absolute;
  top: -1px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: ${palette.grayscale.black};
`;

const LabelBlock = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  white-space: nowrap;

  @media (max-width: 340px) {
    display: block;
    white-space: normal;
  }
`;

const FirstLine = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const SecondLine = styled.div`
  margin-left: 18px;
  margin-top: 2px;

  @media (min-width: 340px) {
    display: inline-block;
    margin-left: 4px;
    margin-top: 0;
  }
`;

const EntranceLine = ({ top, label }) => {
  const [text, time] = label.split(' ('); // ex: '덕우왕국 입장', '15:00 - )'

  return (
    <EntranceLineWrapper top={top}>
      <TopLine />
      <LabelBlock>
        <FirstLine>
          <p style={{ margin: 0 }}>↓</p>
          <span>{text}</span>
        </FirstLine>
        <SecondLine>{`(${time}`}</SecondLine>
      </LabelBlock>
    </EntranceLineWrapper>
  );
};

export default EntranceLine;
