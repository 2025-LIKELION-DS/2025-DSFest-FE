import * as T from '@main/components/ToastMsgStyle';
import { useEffect } from 'react';

const ToastMsg = ({ boothName, onClose }) => {
  const nameLength = String(boothName).length;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1500);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <T.ToastMsg>
      {nameLength < 9 && (
        <T.MsgDiv>
          <T.BoothName>{boothName}</T.BoothName>부스를 방문해 보세요-!
        </T.MsgDiv>
      )}

      {nameLength >= 9 && (
        <T.MsgDiv>
          <T.BoothName>{boothName}</T.BoothName>
          <br />
          부스를 방문해 보세요-!
        </T.MsgDiv>
      )}
    </T.ToastMsg>
  );
};

export default ToastMsg;
