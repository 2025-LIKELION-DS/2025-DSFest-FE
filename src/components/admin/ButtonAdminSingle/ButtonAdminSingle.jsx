import * as B from '@components/admin/ButtonAdminSingle/ButtonAdminSingleStyle';

/**
 * 어드민 페이지에서 사용되는 버튼 컴포넌트입니다.
 * 축제 관계자 페이지의 메뉴, 글 작성과 QR 생성 및 목록 등에 사용됩니다.
 *
 * @param {string} text -- 버튼 내용
 * @param {string} color -- 버튼 배경 색상
 * @param {function} onClick -- 버튼 클릭 시 실행될 함수
 * @param {function} type -- 버튼의 타입
 * ex) <ButtonAdminSingle text="작성하기" color={palette.mainPurple} onClick={handleClick} type='button'/>
 *
 * 버튼 배경 색상만 넘기면 그 색에 따라 따라 글자 색, 테두리 색이 결정됩니다.
 * 버튼의 기본 타입은 button이며, 필요에 따라 타입을 지정할 수 있습니다.
 *
 * @author 김진효, 김서윤
 * **/

const ButtonAdminSingle = ({ text, color, onClick, type = 'button' }) => {
  return (
    <B.ButtonContainer>
      <B.ButtonCommon color={color} onClick={onClick} type={type}>
        {text}
      </B.ButtonCommon>
    </B.ButtonContainer>
  );
};

export default ButtonAdminSingle;
