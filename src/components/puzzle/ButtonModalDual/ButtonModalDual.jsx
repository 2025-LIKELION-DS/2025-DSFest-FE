import * as B from '@components/puzzle/ButtonModalDual/ButtonModalDualStyle';
import palette from '@styles/theme';

/**
 * puzzle 모달에서 사용되는 dual 버튼 컴포넌트입니다. 
 * 부스 위치 확인, 퍼즐 채우기 등의 모달 등에서 사용됩니다. 
 * 
 * @param {string} contextL -- 왼쪽 버튼에 표시할 내용
 * @param {string} colorL -- 왼쪽 버튼 배경 색상 - ${palette.grayscale.white}
 * @param {function} onClickL -- 왼쪽 버튼 클릭 시 실행될 함수
 * 
 * @param {string} contextR -- 오른쪽 버튼에 표시할 내용
 * @param {string} colorR -- 오른쪽 버튼 배경 색상 - ${palette.mainPurple}
 * @param {function} onClickR -- 오른쪽 버튼 클릭 시 실행될 함수
 * 
 * ex) <ButtonModalDual contentL={"부스 위치 확인"}  onClickL={onClick} contentR={"퍼즐 채우기"}/>
 *
 * @author 김진효
 * **/

const ButtonModalDual = ({contentL, colorL=`${palette.grayscale.white}`, onClickL, contentR, colorR=`${palette.mainPurple}`, onClickR}) =>{
  return(
    <B.ButtonContainer>
      <B.ButtonCommon color={colorL} onClick={onClickL}>{contentL}</B.ButtonCommon>
      <B.ButtonCommon color={colorR} onClick={onClickR}>{contentR}</B.ButtonCommon>
    </B.ButtonContainer>
  )
}

export default ButtonModalDual;