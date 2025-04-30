import { useState } from 'react';
import * as C from '@admin/puzzle/CreateStyle';
import palette from '@styles/theme';
import InputCreate from '@admin/components/InputCreate/InputCreate';
import ButtonAdminSingle from '@components/admin/ButtonAdminSingle/ButtonAdminSingle';
import error from '@assets/admin/icon-error.svg';

function Create() {
  const [inputPuzzle, setInputPuzzle] = useState('');
  const [isErrorVisible, setIsErrorVisible] = useState(false);

  const inputPuzzleChange = (e) => {
    setInputPuzzle(e.target.value);
    setIsErrorVisible(false);
  };

  const inputPuzzleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      console.log('Enter pressed');
      if (inputPuzzle.trim()) {
        buttonCreateClick();
      }
    }
  };

  const buttonCreateClick = () => {
    if (!inputPuzzle.trim()) return;

    if (inputPuzzle === '총학생회') {
      // 예시 조건
      setIsErrorVisible(true);
    } else {
      alert(`${inputPuzzle} 부스 생성`);
    }
  };

  return (
    <>
      <C.Create>
        <C.TitleContainer>
          <C.Title>장소명</C.Title>
          <C.Text>
            꼭 장소명이 아니어도
            <br />
            나중에 볼때 구분하기 편한 이름으로 정해주세요.
          </C.Text>
        </C.TitleContainer>
        <C.CreateContainer>
          <C.InputContainer>
            <C.WarnContainer visible={isErrorVisible}>
              <C.ErrorIcon src={error} alt="에러" />
              이미 존재하는 장소명입니다.
            </C.WarnContainer>
            <InputCreate
              placeholder={'총학생회'}
              value={inputPuzzle}
              onChange={inputPuzzleChange}
              onKeyDown={inputPuzzleKeyDown}
            />
          </C.InputContainer>
          <ButtonAdminSingle
            text={'생성'}
            color={`${palette.mainPurple}`}
            onClick={buttonCreateClick}
            disabled={!inputPuzzle.trim()}
          />
        </C.CreateContainer>
      </C.Create>
    </>
  );
}

export default Create;
