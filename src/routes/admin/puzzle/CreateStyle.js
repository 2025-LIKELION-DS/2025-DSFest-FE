import styled from 'styled-components';
import palette from '@styles/theme';

export const Create = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 48px 32px 0;
`;

export const Title = styled.div`
  color: ${palette.grayscale.black};
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
`;
export const Text = styled.div`
  color: ${palette.grayscale.text33};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.35px;
`;

export const CreateContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  width: 100%;
`;

export const WarnContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;

  color: ${palette.system.alert};
  text-align: center;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.35px;

  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

export const ErrorIcon = styled.img`
  width: 24px;
  height: 24px;
`;
