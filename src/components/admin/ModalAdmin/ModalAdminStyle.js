import styled from 'styled-components';
import palette from '@styles/theme';

export const ModalAdmin = styled.div`
  max-width: 281px;
  width: 100%;
  height: 126px;
  border-radius: 24px;

  background-color: ${palette.grayscale.white};

  display: flex;
  flex-direction: column;
  align-items: center;

  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.25);
`;

export const Text = styled.div`
  padding: 30px 38px 23px;
  white-space: nowrap;

  text-align: center;
  font-size: 17px;
  font-weight: 600;
  line-height: 130%;
`;

export const Line = styled.div`
  width: 261px;
  height: 1px;
  background-color: ${palette.grayscale.dc};
`;

export const ConfirmContainer = styled.div`
  display: flex;

  width: 100%;
`;

export const ColLine = styled.div`
  width: 1px;
  height: 29px;
  margin-top: 9px;
  background-color: ${palette.grayscale.dc};
`;

export const ConfirmText = styled.div`
  width: 50%;
  padding: 13px 0 17px;
  text-align: center;

  color: #606268;
  font-size: 16px;
  font-weight: 500;
  line-height: 130%;

  cursor: pointer;
`;

export const ConfirmPulple = styled(ConfirmText)`
  color: ${palette.mainPurple};
`;
