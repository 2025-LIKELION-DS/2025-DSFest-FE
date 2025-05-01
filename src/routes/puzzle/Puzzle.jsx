import * as P from '@puzzle/PuzzleStyle';
import palette from '@styles/theme';
import { use, useState } from 'react';

import boothIcon from '@assets/puzzle/icon-booth.svg';
import whiteErrorIcon from '@assets/puzzle/icon-error-white.svg';
import glowPuzzleIcon from '@assets/puzzle/puzzle-piece-glow-1-grain.svg';
import lightIcon from '@assets/puzzle/icon-tip-lightbulb.svg';
import check from '@assets/puzzle/check.png';
import whiteCheck from '@assets/puzzle/white_check.png';

import ButtonCommon from '@components/ButtonCommon/ButtonCommon.jsx';
import InputLogin from '@components/puzzle/InputLogin/InputLogin';
import ButtonModalDual from '@components/puzzle/ButtonModalDual/ButtonModalDual';
import ButtonModalSingle from '@components/puzzle/ButtonModalSingle/ButtonModalSingle';
import ModalPuzzleSelect from '@components/puzzle/ModalPuzzleSelect/ModalPuzzleSelect';
import ModalPuzzleApprove from '@components/puzzle/ModalPuzzleApprove/ModalPuzzleApprove';
import ModalPuzzleGoods from '@components/puzzle/ModalPuzzleGoods/ModalPuzzleGoods';

function Puzzle() {
  const [inputLoginID, setInputLoginID] = useState('');
  const inputLoginIDChange = (e) => {
    setInputLoginID(e.target.value);
  };

  const [inputLoginPWD, setInputLoginPWD] = useState('');
  const inputLoginPWDChange = (e) => {
    setInputLoginPWD(e.target.value);
  };

  const isLoginEnabled = inputLoginID && inputLoginPWD;

  const [authorized, setAuthorized] = useState(true);
  //퍼즐 9개를 다 채웠을 때
  const [success, setSuccess] = useState(false);
  //퍼즐 완성을 눌렀을 때
  const [completed, setCompleted] = useState(true);
  //경품 수령 완료했을 때
  const [end, setEnd] = useState(false);

  return (
    <>
      <P.top>
        {completed ? (
          <>
            <P.semibold20>축하드립니다!</P.semibold20>
            <P.semibold20>모든 퍼즐이 완성되었어요.</P.semibold20>
          </>
        ) : (
          <>
            <P.puzzleInfo1>아래 퍼즐을 완성하고</P.puzzleInfo1>
            <P.puzzleInfo2>
              <P.goMap>
                {/* onClick={goMap} */}
                <P.boothIcon>
                  <img src={boothIcon} alt="총학생회 부스" />
                </P.boothIcon>
                <P.purplesemibold16>총학생회 부스</P.purplesemibold16>
              </P.goMap>
              를 방문해 경품을 수령하세요!
            </P.puzzleInfo2>
          </>
        )}
      </P.top>

      {authorized ? (
        <P.completedPuzzle>
          <P.completedTitle>
            <P.userInfo>
              <P.userName>은지송</P.userName>
              <P.regular16>님의 퍼즐</P.regular16>
            </P.userInfo>
            <P.todoPuzzle>
              {end ? (
                <>
                  <img src={check} alt="경품 수령 완료" />
                  <P.purpleRegular14>경품 수령 완료</P.purpleRegular14>
                </>
              ) : (
                <>
                  <P.regular14>남은 퍼즐</P.regular14>
                  <P.todoPuzzleCount>2개</P.todoPuzzleCount>
                </>
              )}
            </P.todoPuzzle>
          </P.completedTitle>

          <P.completedPuzzleBox>
            <P.regular16>
              현재 <P.semibold16>완성한</P.semibold16> 퍼즐
            </P.regular16>
            <P.puzzleCount>
              <P.glowPuzzleIcon src={glowPuzzleIcon} />
              <P.completedPuzzleCount>7</P.completedPuzzleCount>
              <P.completedPuzzleCountInfo>개</P.completedPuzzleCountInfo>
            </P.puzzleCount>
          </P.completedPuzzleBox>
        </P.completedPuzzle>
      ) : (
        <P.login>
          <P.inputNickname>
            <InputLogin
              placeholder={'닉네임을 입력해주세요'}
              type={'text'}
              value={inputLoginID}
              onChange={inputLoginIDChange}
            />
          </P.inputNickname>

          <P.inputPassword>
            <InputLogin
              placeholder={'비밀번호를 입력해주세요'}
              type={'password'}
              value={inputLoginPWD}
              onChange={inputLoginPWDChange}
            />
          </P.inputPassword>
          <ButtonCommon text={'로그인'} color={isLoginEnabled ? `${palette.mainPurple}` : `${palette.grayscale.ca}`} />
          {/*  onClick={handleLogin} */}
        </P.login>
      )}

      <P.puzzleGame>
        {authorized ? (
          completed ? (
            <>
              <P.presentInfo>
                <P.goMap>
                  {/* onClick={goMap} */}
                  <P.boothIcon>
                    <img src={boothIcon} alt="총학생회 부스" />
                  </P.boothIcon>
                  <P.purplesemibold16>총학생회 부스</P.purplesemibold16>
                </P.goMap>
                를 방문해 경품을 수령하세요!
              </P.presentInfo>

              <P.CompletedInfo>
                <img src={lightIcon} />
                <P.regular14>경품 수령을 위서는,</P.regular14>
                <P.regular14>
                  <P.bold14>재학생 + 학생회비 납부 </P.bold14>인증이 필요해요.
                </P.regular14>
                <P.bold14>'덕성포털&gt;통합정보시스템&gt;학적변경&gt;</P.bold14>
                <P.regular14>
                  <P.bold14>개인정보변경/지도교수 확인’ </P.bold14>화면을 미리 준비해
                </P.regular14>
                <P.regular14>경품을 빠르게 수령하고, 남은 축제를 즐겨보아요.</P.regular14>
              </P.CompletedInfo>
            </>
          ) : end ? (
            <>
              <P.successPuzzle>
                <P.whiteCheck src={whiteCheck} />
                <P.whiteRegular16>
                  이미 <P.whiteSemibold16>완성</P.whiteSemibold16>된 퍼즐입니다.
                </P.whiteRegular16>
              </P.successPuzzle>
            </>
          ) : (
            <></>
          )
        ) : (
          <>
            <P.emptyPuzzle>
              <P.whiteErrorIcon src={whiteErrorIcon} />
              <P.whiteRegular16>로그인 후 이용가능합니다.</P.whiteRegular16>
            </P.emptyPuzzle>
          </>
        )}
      </P.puzzleGame>

      <P.endButton>
        {completed ? (
          <ButtonCommon text={'경품 수령'} color={`${palette.mainPurple}`} />
        ) : //onClick={handlecompleted}
        success ? (
          <ButtonCommon text={'퍼즐 완성'} color={`${palette.mainPurple}`} />
        ) : (
          //onClick={handleSuccess}
          <ButtonCommon text={'퍼즐 완성'} color={`${palette.grayscale.ca}`} />
        )}
      </P.endButton>
    </>
  );
}

export default Puzzle;
