import styled from 'styled-components';
import palette from '@styles/theme';

export const LineHeader = styled.div`
  width: 100%; //반응형
  box-sizing: border-box;
  color: ${palette.grayscale.black};
  /* H1_SemiBold_20px */
  font-family: Pretendard;
  font-size: 20px;
  font-weight: 600;
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
  font-weight: 400;
  letter-spacing: -0.35px;
  margin-top: 5px;
`;

export const Button = styled.div`
  img {
    width: 39px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const ScrollCon = styled.div`
  margin: 20px 0 23px 0;
  box-sizing: border-box;
  border-radius: 8px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 178px;
`;

export const TimeLineGridWrapper = styled.div`
  position: relative;
  padding: 13.75px 0;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LockOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${palette.grayscale.black70}; // 반투명 배경
  backdrop-filter: blur(2px); //블러 처리
  z-index: 10;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: white;
  font-family: Pretendard;
  font-weight: 500;
  text-align: center;

  img {
    width: 24px;
    margin-bottom: 7px;
  }

  span {
    font-size: 16px;
    margin-bottom: 11px;
    font-weight: 600;
  }

  small {
    font-size: 14px;
    color: ${palette.grayscale.ca};
    font-weight: 400;
  }
`;
