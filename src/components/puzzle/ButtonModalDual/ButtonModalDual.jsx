import * as B from '@components/puzzle/ButtonModalDual/ButtonModalDualStyle';
import palette from '@styles/theme';

/**
 * puzzle 모달에서 사용되는 dual 버튼 컴포넌트입니다.
 * 부스 위치 확인, 퍼즐 채우기 등의 모달 등에서 사용됩니다.
 *
 * @param {string} contextL -- 왼쪽 버튼에 표시할 내용
 * @param {string} colorL -- 왼쪽 버튼 배경 색상 - ${palette.grayscale.white}
 * @param {function} onClickL -- 왼쪽 버튼 클릭 시 실행될 함수
 * @param {string} typeL -- 왼쪽 버튼의 타입
 *
 *
 * @param {string} contextR -- 오른쪽 버튼에 표시할 내용
 * @param {string} colorR -- 오른쪽 버튼 배경 색상 - ${palette.mainPurple}
 * @param {function} onClickR -- 오른쪽 버튼 클릭 시 실행될 함수
 * @param {string} typeR -- 오른쪽 버튼의 타입
 *
 * ex) <ButtonModalDual contentL={"부스 위치 확인"}  onClickL={onClick} typeL='button' contentR={"퍼즐 채우기"} typeR='button'/>
 *
 * 버튼의 기본 타입은 button이며, 필요에 따라 타입을 지정할 수 있습니다.
 *
 * @author 김진효
 * **/

const ButtonModalDual = ({
  contentL,
  colorL = `${palette.grayscale.white}`,
  onClickL,
  typeL = 'button',
  contentR,
  colorR = `${palette.mainPurple}`,
  onClickR,
  typeR = 'button',
}) => {
  return (
    <B.ButtonContainer>
      <B.ButtonCommon color={colorL} onClick={onClickL} type={typeL}>
        {contentL}
      </B.ButtonCommon>
      <B.ButtonCommon color={colorR} onClick={onClickR} type={typeR}>
        {contentR}
      </B.ButtonCommon>
    </B.ButtonContainer>
  );
};

export default ButtonModalDual;
