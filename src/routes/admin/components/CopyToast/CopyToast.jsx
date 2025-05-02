import { useEffect } from 'react';
import * as C from '@admin/components/CopyToast/CopyToastStyle';
import Check from '@assets/admin/icon-check.svg';

/**
 * 어드민 페이지에서 사용되는 copy 토스트 메시지 컴포넌트입니다.
 * 어드민 퍼즐 전반에서 복사 시 사용됩니다.
 *
 * @param {string} position -- 위치 적용
 * @param {function} onClose -- 토스트 메시지 여부
 * ex) <CopyToast position="absolute" onClose={onClose/>
 *
 * 목록은 position="sticky",
 * 퍼즐 생성 후는 position="absolute"로 넘기면 됩니다.
 *
 * @author 김서윤
 * **/

const CopyToast = ({ position, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <C.ToastContainer position={position}>
      <C.MsgContainer>
        <C.CheckIcon src={Check} alt="복사 성공" />
        복사되었습니다
      </C.MsgContainer>
    </C.ToastContainer>
  );
};

export default CopyToast;
