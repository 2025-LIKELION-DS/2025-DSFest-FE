import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';
import * as P from '@admin/puzzle/PreviewStyle';
import palette from '@styles/theme';
import CopyInform from '@admin/components/CopyInform/CopyInform';
import CopyQR from '@admin/components/CopyQr/CopyQr';
import ButtonAdminDual from '@components/admin/ButtonAdminDual/ButtonAdminDual';
import ButtonAdminSingle from '@components/admin/ButtonAdminSingle/ButtonAdminSingle';
import QRImage from '@admin/components/QRImage/QRImage';
import Down from '@assets/admin/icon-download.svg?react';
import Send from '@assets/admin/icon-send.svg?react';

function Preview() {
  const qrImageRef = useRef(null);
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  const [puzzleData, setPuzzleData] = useState({
    puzzleNumber: '1',
    puzzleName: '총학생회',
    qrValue: 'e1439392-f7bd-4e4d-b1ed-0efa86c5200e',
    puzzlePassword: 'E2F989',
  });

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
          <CopyInform title={'퍼즐 번호'} text={puzzleData.puzzleNumber} size="16px" />
          <CopyInform title={'장소명'} text={puzzleData.puzzleName} size="16px" />
          <CopyQR title={'퍼즐 QR'} uuid={puzzleData.qrValue} />
          <CopyInform title={'퍼즐 비밀번호'} text={puzzleData.puzzlePassword} size="20px" />
        </P.Container>

        <P.BottomContainer>
          <ButtonAdminDual
            contentL={<Down />}
            colorL={`${palette.grayscale.white}`}
            onClickL={buttonDownloadClick}
            contentR={<Send />}
            colorR={`${palette.grayscale.white}`}
            onClickR={buttonShareClick}
          />
          <ButtonAdminSingle
            text="목록으로"
            color={`${palette.mainPurple}`}
            onClick={() => handleLinkClick('/admin/puzzle')}
          />
        </P.BottomContainer>
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
