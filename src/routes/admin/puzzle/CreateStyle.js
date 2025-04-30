import styled from 'styled-components';
import palette from '@styles/theme';

export const Create = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 56px);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 46px 0 0;
`;

export const TopContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const PuzzleImg = styled.img`
  width: 75px;
  height: 75px;
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
  gap: 15px;
  padding: 40px 0;
`;

export const WarnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9px;
  width: 100%;

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
