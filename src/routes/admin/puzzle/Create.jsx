import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as C from '@admin/puzzle/CreateStyle';
import palette from '@styles/theme';
import InputCreate from '@admin/components/InputCreate/InputCreate';
import ButtonAdminSingle from '@components/admin/ButtonAdminSingle/ButtonAdminSingle';
import puzzle from '@assets/admin/ex-puzzle.svg';
import error from '@assets/admin/icon-error.svg';

function Create() {
  const [inputPuzzle, setInputPuzzle] = useState('');
  const [inputPuzzleNum, setInputPuzzleNum] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  const isInputComplete = inputPuzzle.trim() && inputPuzzleNum.trim();
  const buttonColor = isErrorVisible
    ? palette.grayscale.ca
    : isInputComplete
      ? palette.mainPurple
      : palette.grayscale.ca;

  const inputPuzzleChange = (e) => {
    setInputPuzzle(e.target.value);
    setIsErrorVisible(false);
  };

  const inputPuzzleNumChange = (e) => {
    const value = e.target.value;

    if (value === '') {
      setInputPuzzleNum('');
      setIsErrorVisible(false);
      return;
    }

    const num = Number(value);

    if (num >= 1 && num <= 9) {
      setInputPuzzleNum(value);
      setIsErrorVisible(false);
    }
  };

  const inputPuzzleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputPuzzle.trim() || inputPuzzleNum.trim()) {
        buttonCreateClick();
      }
    }
  };

  const buttonCreateClick = () => {
    if (!inputPuzzle.trim() || !inputPuzzleNum.trim()) return;

    if (inputPuzzle === '총학생회') {
      // 예시 조건
      setIsErrorVisible(true);
    } else {
      // API 연동
      handleLinkClick('/admin/puzzle/preview');
    }
  };

  return (
    <>
      <C.Create>
        <C.Container>
          <C.TopContainer>
            <C.TitleContainer>
              <C.Title>퍼즐 번호</C.Title>
              <C.Text>
                오른쪽 예시를 참고해
                <br />
                퍼즐 번호를 지정해주세요.
              </C.Text>
            </C.TitleContainer>
            <C.PuzzleImg src={puzzle} alt="퍼즐번호" />
          </C.TopContainer>
          <InputCreate
            placeholder={'1'}
            type={'number'}
            value={inputPuzzleNum}
            onChange={inputPuzzleNumChange}
            onKeyDown={inputPuzzleKeyDown}
          />
          <C.TopContainer>
            <C.TitleContainer>
              <C.Title>장소명</C.Title>
              <C.Text>
                꼭 장소명이 아니어도
                <br />
                나중에 볼때 구분하기 편한 이름으로 정해주세요.
              </C.Text>
            </C.TitleContainer>
          </C.TopContainer>
          <InputCreate
            placeholder={'총학생회'}
            value={inputPuzzle}
            onChange={inputPuzzleChange}
            onKeyDown={inputPuzzleKeyDown}
          />
        </C.Container>
        <C.CreateContainer>
          <C.WarnContainer visible={isErrorVisible}>
            <C.ErrorIcon src={error} alt="에러" />
            이미 존재하는 장소명입니다.
          </C.WarnContainer>
          <ButtonAdminSingle
            text="생성"
            color={buttonColor}
            onClick={buttonCreateClick}
            disabled={!inputPuzzle.trim()}
          />
        </C.CreateContainer>
      </C.Create>
    </>
  );
}

export default Create;
