import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { motion, useDragControls, useMotionValue, useAnimate } from 'motion/react';
import QRCode from 'react-qr-code';
import html2canvas from 'html2canvas';
import palette from '@styles/theme';
import * as P from '@admin/components/PuzzleItem/PuzzleItemStyle';
import QRImage from '@admin/components/QRImage/QRImage';
import Modal from '@components/admin/ModalAdmin/ModalAdmin';
import Circle from '@assets/admin/icon-circle.svg';
import Down from '@assets/admin/icon-download.svg';
import Send from '@assets/admin/icon-send.svg';
import Copy from '@assets/admin/icon-copy.svg';

/**
 * 어드민 페이지에서 사용되는 퍼즐 item 컴포넌트입니다.
 * 어드민 퍼즐 목록에서 사용됩니다.
 *
 * @param {string} index -- 퍼즐 번호
 * @param {string} name -- 퍼즐 장소 이름
 * @param {string} uuid -- 퍼즐 QR uuid 값
 * @param {string} password -- 퍼즐 비밀번호 값
 * @param {boolean} onShowToast -- 복사 토스트 메시지 여부
 * @param {function} onDelete -- 삭제 여부 전달
 * ex) <PuzzleItem index="1" name="멋쟁이사자처럼" uuid="e1439392-f7bd-4e4d-b1ed-0efa86c5200e" password="E2F989" onShowToast={handleShowToast} onDelete={handleDelete} >
 *
 * @author 김서윤
 * **/

const PuzzleItem = ({ index, name, uuid, password, onShowToast, onDelete }) => {
  const controls = useDragControls();
  const [isDeleteShow, setIsDeleteShow] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [animateRef, animate] = useAnimate();

  const qrImageRef = useRef(null);
  const qrContainerRef = useRef(null);

  const itemX = useMotionValue(0);
  const deleteAnimateState = isDeleteShow ? 'appear' : 'disappear';

  useEffect(() => {
    itemX.on('change', (v) => {
      const isOverThreshold = v < -126 / 2;

      setIsDeleteShow(isOverThreshold);
    });
  }, [itemX]);

  const buttonDownloadClick = async () => {
    if (!qrImageRef.current) return;

    try {
      const canvas = await html2canvas(qrImageRef.current, { scale: 4 });
      const dataURL = canvas.toDataURL('image/png');

      const link = document.createElement('a');
      link.href = dataURL;
      link.download = `2025_여운_퍼즐_${index}.png`;
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

        const file = new File([blob], `2025_여운_퍼즐_${index}.png`, { type: 'image/png' });

        if (navigator.canShare && navigator.canShare({ files: [file] })) {
          await navigator.share({
            title: `퍼즐 ${index}`,
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

  const handleQRCopy = async () => {
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

  const handleCopy = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        onShowToast();
      })
      .catch((err) => {
        console.error('복사 실패:', err);
      });
  };

  const handleDelete = () => {
    setIsDeleteModalOpen(true);
  };

  const handleDeleteClick = async () => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/admin/place-auth/${index}`);
      onDelete(index); // 삭제 후 상위 컴포넌트에 알림
    } catch (err) {
      console.error('삭제 실패:', err);
      alert('삭제에 실패했습니다.');
    }
  };

  return (
    <>
      <P.PuzzleContainer>
        <motion.div
          initial="disappear"
          animate={deleteAnimateState}
          variants={{
            appear: { opacity: 1 },
            disappear: { opacity: 0 },
          }}
          style={deleteButtonStyle}
          onClick={handleDelete}>
          삭제
        </motion.div>
        <motion.div
          drag="x"
          dragConstraints={{ left: -126, right: 0 }}
          dragElastic={0.1}
          dragControls={controls}
          dragListener={true}
          style={draggableStyle(itemX)}
          onDragEnd={() => {
            const isOverThreshold = itemX.get() < -126 / 2;
            setIsDeleteShow(isOverThreshold);
            animate(animateRef.current, { x: isOverThreshold ? -126 : 0 });
          }}
          ref={animateRef}>
          <P.ItemContainer
            onPointerDown={(e) => {
              e.stopPropagation();
              controls.start(e);
            }}>
            <P.TopContainer>
              <P.LeftContainer>
                {index}번 퍼즐
                <P.CircleIcon src={Circle} alt="." />
                {name}
              </P.LeftContainer>
              <P.RightContainer>
                <P.DownIcon src={Down} alt="다운로드" onClick={buttonDownloadClick} />
                <P.SendIcon src={Send} alt="공유하기" onClick={buttonShareClick} />
              </P.RightContainer>
            </P.TopContainer>
            <P.BottomContainer>
              <P.CopyContainer>
                QR코드
                <P.CopyIcon src={Copy} alt="복사하기" onClick={handleQRCopy} />
              </P.CopyContainer>
              <P.CopyContainer>
                비밀번호
                <P.CopyIcon src={Copy} alt="복사하기" onClick={handleCopy} />
              </P.CopyContainer>
            </P.BottomContainer>
          </P.ItemContainer>
        </motion.div>
      </P.PuzzleContainer>

      {isDeleteModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1000,
            backgroundColor: 'rgba(0,0,0,0.4)',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Modal
            text="공지사항을 삭제하시겠습니까?"
            confirmText="삭제"
            onClose={() => setIsDeleteModalOpen(false)}
            onConfirm={handleDeleteClick}
          />
        </div>
      )}

      {/* 저장되는 이미지, 렌더링 X */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <div ref={qrImageRef}>
          <QRImage num={index} title={name} uuid={uuid} password={password} />
        </div>
      </div>

      {/* QR만 복사, 렌더링 X */}
      <div style={{ position: 'absolute', left: '-9999px', top: 0 }}>
        <P.QRBackground ref={qrContainerRef}>
          <QRCode value={uuid} size={113} />
        </P.QRBackground>
      </div>
    </>
  );
};

export default PuzzleItem;

// motion/react 라이브러리와 styled-components 호환 문제로 인해 스타일 인라인 지정
const deleteButtonStyle = {
  position: 'absolute',
  top: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: 'auto',
  height: '100%',
  aspectRatio: '1 / 1',
  backgroundColor: palette.system.alert,
  color: palette.grayscale.white,
  fontSize: '20px',
  fontWeight: 600,
  letterSpacing: '-0.5px',
  cursor: 'pointer',
};

const draggableStyle = (itemX) => ({
  x: itemX,
  pointerEvents: 'auto',
});
