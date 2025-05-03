import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import * as P from '@admin/puzzle/PuzzleListStyle';
import palette from '@styles/theme';
import ButtonAdminSingle from '@components/admin/ButtonAdminSingle/ButtonAdminSingle';
import PuzzleItem from '@admin/components/PuzzleItem/PuzzleItem';
import CopyToast from '@admin/components/CopyToast/CopyToast';

function PuzzleList() {
  const [showToast, setShowToast] = useState(false);
  const timeRef = useRef(null);

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  const handleShowToast = () => {
    // 이전에 설정된 타이머 있다면 취소
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }

    setShowToast(true);
  };

  const [puzzleData, setPuzzleData] = useState({
    puzzleNumber: '1',
    puzzleName: '총학생회',
    qrValue: 'e1439392-f7bd-4e4d-b1ed-0efa86c5200e',
    puzzlePassword: 'E2F989',
  });

  return (
    <>
      <P.PuzzleList>
        <ButtonAdminSingle
          text="새로 만들기"
          color={palette.mainPurple}
          onClick={() => handleLinkClick('/admin/puzzle/new')}
        />
        <P.PuzzleItemContainer>
          <PuzzleItem
            index={puzzleData.puzzleNumber}
            name={puzzleData.puzzleName}
            uuid={puzzleData.qrValue}
            password={puzzleData.puzzlePassword}
            onShowToast={handleShowToast}
          />
          <PuzzleItem
            index={puzzleData.puzzleNumber}
            name={puzzleData.puzzleName}
            uuid={puzzleData.qrValue}
            password={puzzleData.puzzlePassword}
            onShowToast={handleShowToast}
          />
          <PuzzleItem
            index={puzzleData.puzzleNumber}
            name={puzzleData.puzzleName}
            uuid={puzzleData.qrValue}
            password={puzzleData.puzzlePassword}
            onShowToast={handleShowToast}
          />
          <PuzzleItem
            index={puzzleData.puzzleNumber}
            name={puzzleData.puzzleName}
            uuid={puzzleData.qrValue}
            password={puzzleData.puzzlePassword}
            onShowToast={handleShowToast}
          />
          <PuzzleItem
            index={puzzleData.puzzleNumber}
            name={puzzleData.puzzleName}
            uuid={puzzleData.qrValue}
            password={puzzleData.puzzlePassword}
            onShowToast={handleShowToast}
          />
        </P.PuzzleItemContainer>

        {showToast && <CopyToast position="sticky" onClose={() => setShowToast(false)} />}
      </P.PuzzleList>
    </>
  );
}

export default PuzzleList;
