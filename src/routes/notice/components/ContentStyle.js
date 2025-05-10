import styled from 'styled-components';
import palette from '@styles/theme';

export const Content = styled.div`
  width: 100%;
  display: flex;
  padding: 20px 0px;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  align-self: stretch;
  border-bottom: 1px solid ${palette.grayscale.df};
  cursor: pointer;
`;

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 8px;
  padding-right: 4px;
  width: ${({ hasImage }) => (hasImage ? 'calc(100% - 88px)' : 'calc(100% - 4px)')};
`;

export const Right = styled.div`
  width: 64px;
  height: 80px;
  border-radius: 4px;
  background: ${({ $img }) => `url(${$img})`} lightgray 50% / cover no-repeat;
`;

export const Title = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0;
  word-break: break-word;

  max-width: 100%;
  color: ${palette.grayscale.text33};
  font-family: Pretendard;
  text-overflow: ellipsis;
  font-size: 16px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.4px;
`;

export const Preview = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;

  overflow: hidden;
  text-overflow: ellipsis;
  letter-spacing: 0;
  word-break: break-word;

  max-width: 100%;
  color: ${palette.grayscale.text33};
  font-family: Pretendard;
  text-align: justify;
  text-overflow: ellipsis;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;
`;
