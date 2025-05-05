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

  padding: 12px 0px 24px;

  display: flex;
  flex-direction: column;
`;

export const ModalContainer = styled.div`
  padding: 0px 16px;

  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ModalFlex = styled(ModalContainer)`
  flex: 1;
`;

export const BoothContainer = styled.div`
  display: flex;
  align-items: center;

  p {
    margin: 0;
  }
`;

export const PaddingContainer = styled(BoothContainer)`
  padding: 0px 13px;
`;

export const Text = styled.p`
  color: ${palette.grayscale.text33};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
`;

export const BoothName = styled.span`
  color: ${palette.grayscale.black};
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
`;

export const ImgContainer = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.width};

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ImgMargin = styled(ImgContainer)`
  margin-left: -5px;
`;

export const Div = styled.div`
  margin-left: -5px;
`;

export const Info = styled.div`
  max-width: 280px;
  width: 100%;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  color: ${palette.grayscale.text88};
  font-size: 14px;
  font-weight: 400;
  line-height: 140%;
`;

export const ColLine = styled.div`
  width: 3px;
  height: 46px;
  background-color: ${palette.grayscale.black50};
`;

export const Complete = styled.p`
  color: ${palette.grayscale.black};
  font-size: 16px;
  font-weight: 600;
  line-height: 140%;
`;

export const InputDiv = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 7px;

  margin-top: 5px;
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
