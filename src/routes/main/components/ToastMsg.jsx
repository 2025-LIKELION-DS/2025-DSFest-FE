import * as T from '@main/components/ToastMsgStyle';

const ToastMsg = ({ boothName }) => {
  const nameLength = String(boothName).length;

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
