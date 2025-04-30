import * as C from '@admin/components/CopyInform/CopyInformStyle';
import Copy from '@assets/admin/icon-copy.svg';

/**
 * 어드민 페이지에서 사용되는 copy 컴포넌트입니다.
 * 어드민 퍼즐 QR 복사에서 사용됩니다.
 *
 * @param {string} title -- title 내용
 * @param {string} text -- text 내용
 * @param {string} size -- 내용 속 폰트 크기
 * ex) <CopyInform title={"퍼즐 번호"} text={"1"} size="16px"/>
 *
 * 퍼즐 번호, 장소명은 size="16px",
 * 퍼즐 비밀번호는 size="20px"로 넘기면 됩니다.
 *
 * @author 김서윤
 * **/

const CopyInform = ({ title, text, size }) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {})
      .catch((err) => {
        console.error('복사 실패:', err);
      });
  };

  return (
    <C.TopContainer>
      <C.TitleContainer>
        {title}
        <C.CopyIcon src={Copy} alt="복사" onClick={handleCopy} />
      </C.TitleContainer>
      <C.InputContainer size={size}>{text}</C.InputContainer>
    </C.TopContainer>
  );
};

export default CopyInform;
