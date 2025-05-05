import { useNavigate } from 'react-router-dom';
import * as E from '@routes/ErrorStyle';
import ErrorIcon from '@assets/error/icon-error.svg';

function Error() {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <E.Error>
        <E.TopContainer>
          <E.ErrorImg src={ErrorIcon} alt="에러" />
          페이지를 찾을 수 없습니다.
        </E.TopContainer>
        <E.BottomContainer onClick={() => handleLinkClick('/')}>
          <E.ButtonContainer>메인페이지로 돌아가기</E.ButtonContainer>
        </E.BottomContainer>
      </E.Error>
    </>
  );
}

export default Error;
