import styled from 'styled-components';
import palette from '@styles/theme';

export const ModalPuzzleSelect = styled.div`
  box-sizing: border-box;
  width: calc(100% - 50px);

  border-radius: 24px;
  background-color: ${palette.grayscale.white};
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);

  padding: 24px 0px;

  display: flex;
  flex-direction: column;

  position: absolute;
  bottom: 33px;
  @media (min-width: 768px), (hover: hover) and (pointer: fine) {
    @media (min-height: 852px) {
      bottom: 90px;
    }
  }
`;

export const ModalContainer = styled.div`
  padding: 0px 27px;
  margin-bottom: 20px;

  display: flex;
  flex-direction: column;
  gap: 9px;

  flex: 1;
`;

export const BoothContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 3.5px;

  p {
    margin: 0;
  }
`;

export const Text = styled.p`
  color: ${palette.grayscale.text33};
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;
`;

export const BoothName = styled.span`
  color: ${palette.grayscale.black};
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const ImgContainer = styled.div`
  width: 55px;
  height: 55px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const Info = styled.div`
  max-width: 280px;
  width: 100%;

  padding: 0 6px;

  color: ${palette.grayscale.text33};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.35px;
`;

export const Hint = styled(Info)`
  color: ${palette.grayscale.text88};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.35px;

  margin-top: -1px;
`;
