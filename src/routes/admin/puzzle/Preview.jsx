import { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas';
import * as P from '@admin/puzzle/PreviewStyle';
import palette from '@styles/theme';
import CopyInform from '@admin/components/CopyInform/CopyInform';
import CopyQR from '@admin/components/CopyQR/CopyQR';
import ButtonAdminDual from '@components/admin/ButtonAdminDual/ButtonAdminDual';
import ButtonAdminSingle from '@components/admin/ButtonAdminSingle/ButtonAdminSingle';
import QRImage from '@admin/components/QRImage/QRImage';
import CopyToast from '@admin/components/CopyToast/CopyToast';
import Down from '@assets/admin/icon-download.svg?react';
import Send from '@assets/admin/icon-send.svg?react';

function Preview() {
  const [showToast, setShowToast] = useState(false);
  const [puzzleData, setPuzzleData] = useState(null);
  const timeRef = useRef(null);
  const qrImageRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  useEffect(() => {
    const data = location.state;
    if (data) {
      setPuzzleData({
        puzzleNumber: data.puzzleIndex.toString(),
        puzzleName: data.placeName,
        qrValue: data.qrValue,
        puzzlePassword: data.placePassword,
      });
    } else {
      // 예외 처리: 직접 접근한 경우 등
      alert('잘못된 접근입니다.');
      navigate('/admin/puzzle');
    }
  }, [location.state, navigate]);

  if (!puzzleData) return null;

  const handleShowToast = () => {
    // 이전에 설정된 타이머 있다면 취소
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    setShowToast(true);
  };

  const buttonDownloadClick = async () => {
    if (!qrImageRef.current) return;

    try {
      const canvas = await html2canvas(qrImageRef.current, { scale: 4 });
      const dataURL = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = dataURL;
      link.download = `2025_여운_퍼즐_${puzzleData.puzzleNumber}.png`;
      link.click();
    } catch (err) {
      console.error('이미지 저장 실패:', err);
    }
  };

  const buttonShareClick = async () => {
    if (!qrImageRef.current) return;

    try {
      const canvas = await html2canvas(qrImageRef.current, { scale: 4 });
      canvas.toBlob(async (blob) => {
        if (!blob) return;

        const file = new File([blob], `2025_여운_퍼즐_${puzzleData.puzzleNumber}.png`, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `퍼즐 ${puzzleData.puzzleNumber}`,
            text: `${puzzleData.puzzleName} 퍼즐 QR 이미지입니다.`,
            files: [file],
          });
        } else {
          alert('공유 기능이 지원되지 않는 환경입니다.');
        }
      });
    } catch (err) {
      console.error('이미지 공유 실패:', err);
    }
  };

  return (
    <>
      <P.Preview>
        <P.Container>
          <CopyInform title={'퍼즐 번호'} text={puzzleData.puzzleNumber} size="16px" onShowToast={handleShowToast} />
          <CopyInform title={'장소명'} text={puzzleData.puzzleName} size="16px" onShowToast={handleShowToast} />
          <CopyQR title={'퍼즐 QR'} uuid={puzzleData.qrValue} onShowToast={handleShowToast} />
          <CopyInform
            title={'퍼즐 비밀번호'}
            text={puzzleData.puzzlePassword}
            size="20px"
            onShowToast={handleShowToast}
          />
        </P.Container>

        <P.BottomContainer>
          <ButtonAdminDual
            contentL={<Down />}
            colorL={palette.grayscale.white}
            onClickL={buttonDownloadClick}
            contentR={<Send />}
            colorR={palette.grayscale.white}
            onClickR={buttonShareClick}
          />
          <ButtonAdminSingle
            text="목록으로"
            color={palette.mainPurple}
            onClick={() => handleLinkClick('/admin/puzzle')}
          />
        </P.BottomContainer>
        {showToast && <CopyToast position="absolute" onClose={() => setShowToast(false)} />}
      </P.Preview>

      {/* 저장되는 이미지, 렌더링 X */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <div ref={qrImageRef}>
          <QRImage
            num={puzzleData.puzzleNumber}
            title={puzzleData.puzzleName}
            uuid={puzzleData.qrValue}
            password={puzzleData.puzzlePassword}
          />
        </div>
      </div>
    </>
  );
}

export default Preview;
