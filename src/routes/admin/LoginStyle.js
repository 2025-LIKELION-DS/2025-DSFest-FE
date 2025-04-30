import styled from 'styled-components';
// import palette from '@styles/theme';

export const Login = styled.div`
  width: 100%;
  height: calc(100% - 200px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 200px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 100px;
  color: #191919;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const InputArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  padding-bottom: 28px;
`;
