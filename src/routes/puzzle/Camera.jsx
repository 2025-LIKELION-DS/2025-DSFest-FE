import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import QrScanner from 'qr-scanner';
import * as C from '@puzzle/CameraStyle';

import qrIcon from '@assets/puzzle/icon-qr.svg';

function Camera() {
  const location = useLocation();

  const navigate = useNavigate();
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);

  const handleScan = (result) => {
    const data = result?.data;
    if (!data) return;
    qrScannerRef.current?.stop(); // 스캐너 멈춤
    navigate('/puzzle', { state: { qrData: data, puzzleNumber: location.state?.puzzleNumber } });
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

        <C.videoBox>
          <C.video ref={videoRef} />
          <C.corner className="top-left" />
          <C.corner className="top-right" />
          <C.corner className="bottom-left" />
          <C.corner className="bottom-right" />
        </C.videoBox>
      </C.background>
    </>
  );
}

export default Camera;
