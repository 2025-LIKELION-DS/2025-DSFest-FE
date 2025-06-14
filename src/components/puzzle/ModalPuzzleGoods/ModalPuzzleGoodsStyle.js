import styled from 'styled-components';
import palette from '@styles/theme';

export const ModalPuzzleSelect = styled.div`
  box-sizing: border-box;
  width: calc(100% - 50px);
  height: 252px;

  border-radius: 24px;
  background-color: ${palette.grayscale.white};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);

  padding: 24px 0px;

  position: relative;

  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 33px;

  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    @media (min-height: 852px) {
      width: 345px;
    }
  }
`;

export const ModalContainer = styled.div`
  padding: 20px 26px 0px;
`;

export const ImgContainer = styled.div`
  max-width: ${(props) => props.width};
  width: 100%;
  height: ${(props) => props.width};

  position: absolute;
  top: ${(props) => props.$top};
  left: ${(props) => props.$left};

  opacity: 0.4;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Text = styled.div`
  width: 100%;

  color: ${palette.grayscale.black};
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.4px;
`;

export const Ptext = styled.div`
  color: ${palette.mainPurple};
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
`;

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  flex: 1;
  gap: 7px;
`;

export const FlexText = styled(Text)`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 7px;
  align-items: center;

  flex: 1;
`;

export const CloseDiv = styled.div`
  position: absolute;
  top: 15px;
  right: 15px;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;

    cursor: pointer;
  }
`;

export const Warning = styled.div`
  padding: 0px 16px;

  display: flex;
  align-items: center;
  gap: 4px;

  p {
    color: ${palette.system.alert};
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.35px;
    margin: 0;
  }
`;
