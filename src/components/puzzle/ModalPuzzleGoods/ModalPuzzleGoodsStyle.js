import styled from 'styled-components';
import palette from '@styles/theme';

export const ModalPuzzleSelect = styled.div`
  box-sizing: border-box;
  max-width: 345px;
  width: 100%;
  height: 229px;

  border-radius: 24px;
  background-color: ${palette.grayscale.white};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);

  padding: 24px 0px;

  position: relative;

  display: flex;
  flex-direction: column;
`

export const ModalContainer = styled.div`
  padding: 45px 26px 0px;
  
  display: flex;
  flex-direction: column;
  gap:9px;

  flex: 1;
`

export const ImgContainer = styled.div`
  max-width: ${(props) => props.width};
  width: 100%;
  height: ${(props) => props.width};

  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};

  
  >img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const Text = styled.div`
  width: 100%;

  color: ${palette.grayscale.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 140%; 
  letter-spacing: -0.4px;
`

export const Ptext = styled.div`
  color: ${palette.mainPurple};
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
`

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  gap: 14px;
`

export const FlexText = styled(Text)`
  width: 100%;
  flex: 1;

  display: flex;
  align-items: flex-end;
`