import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import QrScanner from 'qr-scanner';

function Camera() {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);
  const hasScannedRef = useRef(false);

  const handleScan = (result) => {
    const data = result?.data;
    if (!data) return;

    hasScannedRef.current = true;
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
  }, []);

  return (
    <>
      <video ref={videoRef} style={{ width: '100%', height: '100%' }}></video>
    </>
  );
}

export default Camera;
