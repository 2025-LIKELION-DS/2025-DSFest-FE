import * as B from '@components/puzzle/ButtonModalSingle/ButtonModalSingleStyle';

/**
 * puzzle 모달에서 사용되는 single 버튼 컴포넌트입니다.
 * 완료 및 입력 버튼 등에서 사용됩니다.
 *
 * @param {string} text -- 버튼 내용
 * @param {function} onClick -- 버튼 클릭 시 실행될 함수
 * ex) <ButtonModalSingle text={"완료"} onClick={handleClick}/>
 *
 * @author 김진효
 * **/

const ButtonModalSingle = ({ text, onClick }) => {
  return (
    <B.ButtonContainer>
      <B.ButtonCommon onClick={onClick}>{text}</B.ButtonCommon>
    </B.ButtonContainer>
  );
};

export default ButtonModalSingle;
