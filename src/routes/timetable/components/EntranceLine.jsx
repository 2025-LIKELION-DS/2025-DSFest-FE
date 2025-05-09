import React from 'react';
import styled from 'styled-components';
import palette from '@styles/theme';

const EntranceLineWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => `${top - 4}px`};
  left: 75%;
  width: 50%;
  transform: translateX(-50%);
  //반응형 폰트 사이즈
  font-size: clamp(7.5px, 2vw, 11.5px);
  color: ${palette.grayscale.text33};
  pointer-events: none;
  z-index: 10000;
  text-align: center;

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
  /* @media (max-width: 334px) {
    font-size: 8.5px;
  }
  @media (max-width: 323px) {
    font-size: 7.5px;
  }
  @media (max-width: 302px) {
    font-size: 7px;
  } */
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
`;

const EntranceLine = ({ top, label }) => {
  const [text, time] = label.split(' ('); // ex: '덕우왕국 입장', '15:00 - )'

  return (
    <EntranceLineWrapper top={top}>
      <TopLine />
      <LabelBlock>
        <p style={{ margin: 0 }}>↓</p>
        <span>{text}</span>
        <span> {`(${time}`}</span>
      </LabelBlock>
    </EntranceLineWrapper>
  );
};

export default EntranceLine;
