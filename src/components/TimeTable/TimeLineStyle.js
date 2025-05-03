import styled from 'styled-components';
import palette from '@styles/theme';

export const LineHeader = styled.div`
  color: ${palette.grayscale.black};
  /* H1_SemiBold_20px */
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.5px;
`;

export const HeaderCon = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TimeLine = styled.div`
  display: block;
`;

export const Time = styled.div`
  color: ${palette.grayscale.text88};
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: -0.35px;
  margin-top: 5px;
`;

export const Button = styled.div`
  width: 39px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ScrollCon = styled.div`
  margin: 20px 0 23px 0;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  width: 345px;
  height: 178px;
`;

export const TimeLineGridWrapper = styled.div`
  position: relative; // 반드시 있어야 함
  padding: 13.75px 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
