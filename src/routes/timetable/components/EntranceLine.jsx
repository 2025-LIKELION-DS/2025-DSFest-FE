import styled from 'styled-components';
import palette from '@styles/theme';

const EntranceLineWrapper = styled.div`
  position: absolute;
  top: ${({ top }) => `${top - 4}px`};
  left: 76%;
  width: 47%;
  transform: translateX(-50%);
  //반응형 폰트 사이즈
  font-size: clamp(11px, 2vw, 11.5px);
  color: ${palette.grayscale.text33};
  pointer-events: none;
  z-index: 10000;
  text-align: center;

  transition:
    top 0.6s ease-in-out,
    opacity 0.3s ease;

  // 서서히 나타나도록
  opacity: 0;
  transform: translateX(-50%) translateY(7px);
  animation: fadeInUp 1s ease-out forwards;

  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
  }

  // 덕우왕국 입장 반응형
  @media (max-width: 379px) {
    font-size: 10.5px;
  }
  @media (max-width: 367px) {
    font-size: 10.2px;
  }
  @media (max-width: 363px) {
    font-size: 10px;
  }
  @media (max-width: 356px) {
    font-size: 9.5px;
  }
  @media (max-width: 345px) {
    font-size: 9.3px;
  }
  @media (max-width: 341px) {
    font-size: 9px;
  }
  @media (max-width: 334px) {
    font-size: 8.7px;
  }
  @media (max-width: 327px) {
    font-size: 8.5px;
  }
  @media (max-width: 323px) {
    font-size: 8.3px;
  }
  @media (max-width: 318px) {
    font-size: 8px !important;
  }
  @media (max-width: 312px) {
    font-size: 7px !important;
  }
`;

const TopLine = styled.div`
  position: absolute;
  top: -1px;
  left: 0px;
  width: 100%;
  height: 1px;
  background-color: ${palette.grayscale.black};
`;

const LabelBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1px;
`;

const EntranceLine = ({ top, label }) => {
  const [text, time] = label.split(' ('); // ex: '덕우왕국 입장', '15:00 - )'

  return (
    <EntranceLineWrapper
      style={{
        top: `${top - 6}px`,
        opacity: top < 0 ? 0 : 1,
      }}>
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
