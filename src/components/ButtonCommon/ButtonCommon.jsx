import * as B from '@components/ButtonCommon/ButtonCommonStyle'

/**
 * 가장 기본적으로 사용되는 버튼 컴포넌트입니다. 
 * 로그인, 퍼즐 완성, 경품 수령 등에 사용됩니다.
 * 
 * @param {string} text -- 버튼 내용
 * @param {string} color -- 버튼 색상
 * @param {function} onClick -- 버튼 클릭 시 실행될 함수
 * ex) <ButtonCommon text={"로그인"} color={`${palette.grayscale.ca}`} onClick={handleClick}/>
 *
 * @author 김진효
 * **/

const ButtonCommon = ({text, color, onClick}) =>{
  return(
    <B.ButtonContainer>
      <B.ButtonCommon color={color} onClick={onClick}>{text}</B.ButtonCommon>
    </B.ButtonContainer>
  )
}

export default ButtonCommon