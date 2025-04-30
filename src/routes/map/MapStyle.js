import styled from 'styled-components';
import palette from '@styles/theme';


export const Map = styled.div`
  font-family: Pretendard;
  margin: 0;
  padding: 0;
  position: relative;
  height: 94%;
  background-image: url(${(props) => props.$bg});
  background-position: center -40px;
  overflow: hidden;
  `;

export const BoothCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100px;
  z-index: 0;


width: 100%;
// height: 490px;
transition: height 0.2s ease;
${({ panelState }) => `
    height: ${panelState === 'expanded'
      ? '92%'
      : panelState === 'collapsed'
      ? '93px'
      : '490px'};
      overflow-y: ${panelState === 'expanded' ? 'scroll' : 'hidden'};
  `}
  ${({ dragOffset }) => `
    transform: translateY(${dragOffset}px);
  `}
will-change: transform;

flex-shrink: 0;
overflow: hidden;

border-radius: 32px 28px 0px 0px;
background-color: ${palette.grayscale.white};
box-shadow: 0px -4px 12px 0px rgba(0, 0, 0, 0.10);

  position: absolute;
  bottom: 0;
`

export const TouchSection = styled.div``

export const BarContainer = styled.div`
display: flex;
justify-content: center;

margin: 15px 0 25px; 
`

export const Bar = styled.div`
width: 103px;
height: 4px;
flex-shrink: 0;

border-radius: 2px;
background: ${palette.grayscale.ef};
`
export const BoothContentArea = styled.div`
  overflow-y: auto;
`

export const BoothCard = styled.div`
  border-top: 1px solid ${palette.grayscale.df};
  padding: 16px 0;
  margin: 0 20px;

`;

export const BoothName = styled.p`
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
  margin:0 0 8px;
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


// 추가
export const ToggleImage = styled.img`
  width: 15px;
`;

export const DateWrapper = styled.div`
  display:flex;
    height: 32px;
    position: absolute;
  top: 15px;
  right: 20px;
  padding: 0 12px;
  border-radius: 16px;
  background-color: ${palette.grayscale.white};
  font-weight: bold;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);


justify-content: flex-end;
align-items: center;
gap: 2px;
flex-shrink: 0;
`

export const MapArea = styled.div`
  position: relative;
  width: 100%;
  height: auto;
`;

export const ZoomButtonWrapper = styled.div`
  position: absolute;
  top: 15px;
  left: 18px;
  display: flex;
  gap: 8px;
`;

export const ZoomButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.15);
  background-color: ${palette.grayscale.white};
  padding: 8px;
  
`;

export const Minus = styled.img``
export const Plus = styled.img``

export const DaySelectButton = styled.button`
  font-family: Pretendard;
font-size: 12px;
font-style: normal;
font-weight: 600;
line-height: normal;
letter-spacing: -0.3px;
padding : 0 5px;
`;

export const TagFilterContainer = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 18px 16px;
  overflow-x : scroll;
  overflow-y : hidden;
  align-items: center;
  `;

export const TagFilter = styled.button`
  padding: 8px 16px;
  border-radius: 16px;
  background-color: ${palette.grayscale.white};
  border: 1px solid ${palette.grayscale.ca};
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  height: 32px;
`;