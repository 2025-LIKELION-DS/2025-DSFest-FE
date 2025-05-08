import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import QrScanner from 'qr-scanner';
import * as C from '@puzzle/CameraStyle';

import qrIcon from '@assets/puzzle/icon-qr.svg';

function Camera() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);

  const handleScan = (result) => {
    const data = result?.data;
    if (!data) return;
    console.log('QR 스캔 결과:', data);
    qrScannerRef.current?.stop(); // 스캐너 멈춤
    navigate('/puzzle', { state: { qrData: data } });
  };

  useEffect(() => {
    if (videoRef.current) {
      const qrScanner = new QrScanner(videoRef.current, handleScan, {
        returnDetailedScanResult: true,
      });
      qrScannerRef.current = qrScanner;
      qrScanner.start();

      return () => {
        qrScanner.stop();
        qrScanner.destroy();
      };
    }
  });

  return (
    <>
      <C.background>
        <C.qrInfo>
          <C.qrImg src={qrIcon} />
          <C.whiteRegular20>
            <C.whiteBold20>큐알코드</C.whiteBold20>
            를 <br />
            스캔해주세요
          </C.whiteRegular20>
        </C.qrInfo>

        <C.video ref={videoRef}></C.video>
      </C.background>
    </>
  );
}

export default Camera;
