import * as B from '@components/ButtonCommon/ButtonCommonStyle';

/**
 * 가장 기본적으로 사용되는 버튼 컴포넌트입니다.
 * 로그인, 퍼즐 완성, 경품 수령 등에 사용됩니다.
 *
 * @param {string} text -- 버튼 내용
 * @param {string} color -- 버튼 색상
 * @param {function} onClick -- 버튼 클릭 시 실행될 함수
 * @param {string} type -- 버튼의 타입
 *
 * ex) <ButtonCommon text={"로그인"} color={palette.grayscale.ca} onClick={handleClick} type='button'/>
 *
 * 버튼의 기본 타입은 button이며, 필요에 따라 타입을 지정할 수 있습니다.
 *
 * @author 김진효
 * **/

const ButtonCommon = ({ text, color, onClick, type = 'button' }) => {
  return (
    <B.ButtonContainer>
      <B.ButtonCommon color={color} onClick={onClick} text={type}>
        {text}
      </B.ButtonCommon>
    </B.ButtonContainer>
  );
};

export default ButtonCommon;
