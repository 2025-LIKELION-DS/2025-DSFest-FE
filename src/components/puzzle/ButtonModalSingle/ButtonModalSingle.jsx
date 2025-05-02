import * as B from '@components/puzzle/ButtonModalSingle/ButtonModalSingleStyle';

/**
 * puzzle 모달에서 사용되는 single 버튼 컴포넌트입니다.
 * 완료 및 입력 버튼 등에서 사용됩니다.
 *
 * @param {string} text -- 버튼 내용
 * @param {function} onClick -- 버튼 클릭 시 실행될 함수
 * @param {string} type -- 버튼의 타입
 *
 * ex) <ButtonModalSingle text={"완료"} onClick={handleClick} type='button'/>
 *
 * 버튼의 기본 타입은 button이며, 필요에 따라 타입을 지정할 수 있습니다.
 *
 *
 * @author 김진효
 * **/

const ButtonModalSingle = ({ text, onClick, type }) => {
  return (
    <B.ButtonContainer>
      <B.ButtonCommon onClick={onClick} type={type}>
        {text}
      </B.ButtonCommon>
    </B.ButtonContainer>
  );
};

export default ButtonModalSingle;
