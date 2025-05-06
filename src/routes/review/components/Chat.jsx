import styled from 'styled-components';
import palette from '@styles/theme';

const Message = styled.div`
  width: fit-content;
  max-width: 100%;
  padding: 12px;
  border-radius: 12px;
  background: ${palette.mainPurple10};
  color: ${palette.grayscale.text33};
  font-family: Pretendard;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;
  white-space: pre-wrap;
`;

const Chat = ({ message }) => {
  return <Message>{message}</Message>;
};

export default Chat;
