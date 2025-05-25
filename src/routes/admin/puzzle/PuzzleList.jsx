import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import * as P from '@admin/puzzle/PuzzleListStyle';
import palette from '@styles/theme';
import ButtonAdminSingle from '@components/admin/ButtonAdminSingle/ButtonAdminSingle';
import PuzzleItem from '@admin/components/PuzzleItem/PuzzleItem';
import CopyToast from '@admin/components/CopyToast/CopyToast';
import puzzleData from '@data/puzzlePlace.json';

function PuzzleList() {
  const [showToast, setShowToast] = useState(false);
  const [puzzleList, setPuzzleList] = useState([]);
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

  /*
  useEffect(() => {
    const fetchPuzzleList = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_URL}/admin/place-auth`);
        if (response.data?.data) {
          setPuzzleList(response.data.data);
        }
      } catch (error) {
        console.error('퍼즐 리스트 조회 실패:', error);
      }
    };

    fetchPuzzleList();
  }, []);
  */

  useEffect(() => {
    if (puzzleData?.data) {
      setPuzzleList(puzzleData.data);
    }
  }, []);

  const handleDelete = (deletedIndex) => {
    setPuzzleList((prev) => prev.filter((item) => item.puzzleIndex.toString() !== deletedIndex));
  };

  return (
    <>
      <P.PuzzleList>
        <ButtonAdminSingle
          text="새로 만들기"
          color={palette.mainPurple}
          onClick={() => handleLinkClick('/admin/puzzle/new')}
        />
        <P.PuzzleItemContainer>
          {puzzleList.map((item) => (
            <PuzzleItem
              key={item.qrValue}
              index={item.puzzleIndex.toString()}
              name={item.placeName}
              uuid={item.qrValue}
              password={item.placePassword}
              onShowToast={handleShowToast}
              onDelete={handleDelete}
            />
          ))}
        </P.PuzzleItemContainer>

        {showToast && <CopyToast position="sticky" onClose={() => setShowToast(false)} />}
      </P.PuzzleList>
    </>
  );
}

export default PuzzleList;
