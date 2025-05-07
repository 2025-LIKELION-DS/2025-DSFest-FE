import { useNavigate } from 'react-router-dom';
import * as H from '@notice/components/NumStyle';
import * as T from '@components/Topbar/TopbarStyle';
import CloseImg from '@assets/notice/icon-close.svg';

function HeaderNum({ current, total }) {
  const navigate = useNavigate();

  const onClickBack = () => {
    navigate(-1);
  };

  return (
    <H.Header>
      <H.Close src={CloseImg} alt="닫기" onClick={onClickBack} />
      <H.Pages>
        {current} / {total}
      </H.Pages>
      <H.Empty />
    </H.Header>
  );
}

export default HeaderNum;
