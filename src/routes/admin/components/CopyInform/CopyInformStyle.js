import styled from 'styled-components';
import palette from '@styles/theme';

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 0 25px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  color: ${palette.grayscale.black};
  font-size: 20px;
  font-weight: 600;
  line-height: 140%;
`;

export const CopyIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const InputContainer = styled.div`
  width: 100%;
  height: 56px;
  border-radius: 88px;
  background-color: ${palette.grayscale.ef};

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${palette.grayscale.text33};
  font-size: ${(props) => props.size};
  font-weight: 500;
  line-height: 140%;
`;
