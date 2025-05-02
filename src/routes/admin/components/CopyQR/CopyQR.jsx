import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import * as C from '@admin/components/CopyQR/CopyQRStyle';
import Copy from '@assets/admin/icon-copy.svg';
import { useRef } from 'react';

/**
 * 어드민 페이지에서 사용되는 QR 컴포넌트입니다.
 * 어드민 퍼즐 QR 복사에서 사용됩니다.
 *
 * @param {string} title -- title 내용
 * @param {string} uuid -- QR uuid 값
 * @param {boolean} onShowToast -- 복사 토스트 메시지 여부
 * ex) <CopyQR title={"퍼즐 QR"} uuid={"e1439392-f7bd-4e4d-b1ed-0efa86c5200e"} onShowToast={handleShowToast}/>
 *
 * @author 김서윤
 * **/

const CopyQR = ({ title, uuid, onShowToast }) => {
  const qrContainerRef = useRef(null);

  const handleCopy = async () => {
    if (!qrContainerRef.current) return;

    try {
      const canvas = await html2canvas(qrContainerRef.current, { scale: 4 });
      canvas.toBlob(async (blob) => {
        if (!blob) return;

        await navigator.clipboard.write([
          new ClipboardItem({
            'image/png': blob,
          }),
        ]);
      });
      onShowToast();
    } catch (err) {
      console.error('복사 실패:', err);
    }
  };

  return (
    <C.TopContainer>
      <C.TitleContainer>
        {title}
        <C.CopyIcon src={Copy} alt="복사" onClick={handleCopy} />
      </C.TitleContainer>
      <C.QRBackground ref={qrContainerRef}>
        <QRCode value={uuid} size={113} />
      </C.QRBackground>
    </C.TopContainer>
  );
};

export default CopyQR;
