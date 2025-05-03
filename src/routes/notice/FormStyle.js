import styled from 'styled-components';
import palette from '@styles/theme';

export const Form = styled.div`
  padding: 28px 24px 20px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Input = styled.input`
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: ${palette.grayscale.text33};
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 700;
  line-height: 132%;
  letter-spacing: -0.45px;
  border: none;
  background: transparent;
  outline: none;
`;

export const TextArea = styled.textarea`
  width: 100%;
  color: ${palette.grayscale.text33};
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: -0.4px;
  border: none;
  background: transparent;
  outline: none;
  resize: none;
`;

export const Images = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 24px 30px 24px;
  gap: 12px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const ImagePicker = styled.div`
  width: 128px;
  height: 128px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 12px;
  border: 1px solid ${palette.grayscale.text33};
  background: ${palette.grayscale.df};
  & img {
    width: 40px;
    height: 40px;
  }
  cursor: pointer;
`;

export const Preview = styled.div`
  position: relative;
  & img {
    width: 128px;
    height: 128px;
    object-fit: cover;
    border-radius: 12px;
  }
`;

export const DeleteBtn = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  & img {
    width: 16px;
    height: 16px;
    flex-shrink: 0;
    cursor: pointer;
  }
`;
