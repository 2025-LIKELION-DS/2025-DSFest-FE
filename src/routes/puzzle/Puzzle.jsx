import * as P from '@puzzle/PuzzleStyle';
import palette from '@styles/theme';
import { use, useState } from 'react';

import boothIcon from '@assets/puzzle/icon-booth.svg';
import whiteErrorIcon from '@assets/puzzle/icon-error-white.svg';
import glowPuzzleIcon from '@assets/puzzle/puzzle-piece-glow-1-grain.svg';
import lightIcon from '@assets/puzzle/icon-tip-lightbulb.svg';
import check from '@assets/puzzle/check.png';
import whiteCheck from '@assets/puzzle/white_check.png';

import puzzle1Default from '@assets/puzzle/puzzle_default_1.svg';
import puzzle2Default from '@assets/puzzle/puzzle_default_2.svg';
import puzzle3Default from '@assets/puzzle/puzzle_default_3.svg';
import puzzle4Default from '@assets/puzzle/puzzle_default_4.svg';
import puzzle5Default from '@assets/puzzle/puzzle_default_5.svg';
import puzzle6Default from '@assets/puzzle/puzzle_default_6.svg';
import puzzle7Default from '@assets/puzzle/puzzle_default_7.svg';
import puzzle8Default from '@assets/puzzle/puzzle_default_8.svg';
import puzzle9Default from '@assets/puzzle/puzzle_default_9.svg';

import puzzle1Click from '@assets/puzzle/puzzle_click_1.svg';
import puzzle2Click from '@assets/puzzle/puzzle_click_2.svg';
import puzzle3Click from '@assets/puzzle/puzzle_click_3.svg';
import puzzle4Click from '@assets/puzzle/puzzle_click_4.svg';
import puzzle5Click from '@assets/puzzle/puzzle_click_5.svg';
import puzzle6Click from '@assets/puzzle/puzzle_click_6.svg';
import puzzle7Click from '@assets/puzzle/puzzle_click_7.svg';
import puzzle8Click from '@assets/puzzle/puzzle_click_8.svg';
import puzzle9Click from '@assets/puzzle/puzzle_click_9.svg';

import puzzle1Complete from '@assets/puzzle/puzzle_complete_1.svg';
import puzzle2Complete from '@assets/puzzle/puzzle_complete_2.svg';
import puzzle3Complete from '@assets/puzzle/puzzle_complete_3.svg';
import puzzle4Complete from '@assets/puzzle/puzzle_complete_4.svg';
import puzzle5Complete from '@assets/puzzle/puzzle_complete_5.svg';
import puzzle6Complete from '@assets/puzzle/puzzle_complete_6.svg';
import puzzle7Complete from '@assets/puzzle/puzzle_complete_7.svg';
import puzzle8Complete from '@assets/puzzle/puzzle_complete_8.svg';
import puzzle9Complete from '@assets/puzzle/puzzle_complete_9.svg';

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

  const [authorized, setAuthorized] = useState(false);
  //퍼즐 9개를 다 채웠을 때
  const [success, setSuccess] = useState(false);
  //퍼즐 완성을 눌렀을 때
  const [completed, setCompleted] = useState(false);
  //경품 수령 완료했을 때
  const [end, setEnd] = useState(true);

  const [puzzleValue, setPuzzleValue] = useState({
    index1: true,
    index2: true,
    index3: true,
    index4: true,
    index5: true,
    index6: true,
    index7: true,
    index8: true,
    index9: true,
  });

  const [isPuzzleHover, setIsPuzzleHover] = useState({
    index1: false,
    index2: false,
    index3: false,
    index4: false,
    index5: false,
    index6: false,
    index7: false,
    index8: false,
    index9: false,
  });

  const handleMouseOver = (indexKey) => {
    setIsPuzzleHover((prev) => ({ ...prev, [indexKey]: true }));
  };

  const handleMouseOut = (indexKey) => {
    setIsPuzzleHover((prev) => ({ ...prev, [indexKey]: false }));
  };

  return (
    <P.puzzlePage>
      <P.currentPuzzleInfo>
        <P.top>
          {completed ? (
            <P.celebration>
              <P.semibold20>축하드립니다!</P.semibold20>
              <P.semibold20>모든 퍼즐이 완성되었어요.</P.semibold20>
            </P.celebration>
          ) : (
            <>
              <P.puzzleInfo1>아래 퍼즐을 완성하고</P.puzzleInfo1>
              <P.puzzleInfo2>
                <P.goMap>
                  {/* onClick={goMap} */}
                  <P.boothIcon>
                    <img src={boothIcon} alt="총학생회 본부" />
                  </P.boothIcon>
                  <P.purplesemibold16>총학생회 본부</P.purplesemibold16>
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
                    <P.todoPuzzleCount>0개</P.todoPuzzleCount>
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
                <P.completedPuzzleCount>9</P.completedPuzzleCount>
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
            <ButtonCommon
              text={'로그인'}
              color={isLoginEnabled ? `${palette.mainPurple}` : `${palette.grayscale.ca}`}
            />
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
                      <img src={boothIcon} alt="총학생회 본부" />
                    </P.boothIcon>
                    <P.purplesemibold16>총학생회 본부</P.purplesemibold16>
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
                  <P.alreadySuccessInfo>
                    <P.whiteCheck src={whiteCheck} />
                    <P.whiteRegular16>
                      이미 <P.whiteSemibold16> 완성</P.whiteSemibold16>된 퍼즐입니다.
                    </P.whiteRegular16>
                  </P.alreadySuccessInfo>
                </P.successPuzzle>
              </>
            ) : (
              <P.puzzle>
                <P.puzzleGrid>
                  <P.puzzle1
                    onMouseOver={() => handleMouseOver('index1')}
                    onMouseOut={() => handleMouseOut('index1')}
                    src={puzzleValue.index1 ? puzzle1Complete : isPuzzleHover.index1 ? puzzle1Click : puzzle1Default}
                    style={puzzleValue.index1 ? { top: '0.3rem' } : {}}
                  />
                  <P.puzzle2
                    onMouseOver={() => handleMouseOver('index2')}
                    onMouseOut={() => handleMouseOut('index2')}
                    src={puzzleValue.index2 ? puzzle2Complete : isPuzzleHover.index2 ? puzzle2Click : puzzle2Default}
                    style={puzzleValue.index2 ? { top: '0.3rem' } : {}}
                  />
                  <P.puzzle3
                    onMouseOver={() => handleMouseOver('index3')}
                    onMouseOut={() => handleMouseOut('index3')}
                    src={puzzleValue.index3 ? puzzle3Complete : isPuzzleHover.index3 ? puzzle3Click : puzzle3Default}
                    style={puzzleValue.index3 ? { top: '0.3rem' } : {}}
                  />
                  <P.puzzle4
                    onMouseOver={() => handleMouseOver('index4')}
                    onMouseOut={() => handleMouseOut('index4')}
                    src={puzzleValue.index4 ? puzzle4Complete : isPuzzleHover.index4 ? puzzle4Click : puzzle4Default}
                    style={puzzleValue.index4 ? { top: '5.99rem' } : {}}
                  />
                  <P.puzzle5
                    onMouseOver={() => handleMouseOver('index5')}
                    onMouseOut={() => handleMouseOut('index5')}
                    src={puzzleValue.index5 ? puzzle5Complete : isPuzzleHover.index5 ? puzzle5Click : puzzle5Default}
                    style={puzzleValue.index5 ? { top: '7.3549rem' } : {}}
                  />
                  <P.puzzle6
                    onMouseOver={() => handleMouseOver('index6')}
                    onMouseOut={() => handleMouseOut('index6')}
                    src={puzzleValue.index6 ? puzzle6Complete : isPuzzleHover.index6 ? puzzle6Click : puzzle6Default}
                    style={puzzleValue.index6 ? { top: '5.98rem' } : {}}
                  />
                  <P.puzzle7
                    onMouseOver={() => handleMouseOver('index7')}
                    onMouseOut={() => handleMouseOut('index7')}
                    src={puzzleValue.index7 ? puzzle7Complete : isPuzzleHover.index7 ? puzzle7Click : puzzle7Default}
                    style={puzzleValue.index7 ? { top: '14.51rem' } : {}}
                  />
                  <P.puzzle8
                    onMouseOver={() => handleMouseOver('index8')}
                    onMouseOut={() => handleMouseOut('index8')}
                    src={puzzleValue.index8 ? puzzle8Complete : isPuzzleHover.index8 ? puzzle8Click : puzzle8Default}
                    style={puzzleValue.index8 ? { top: '13.18rem' } : {}}
                  />
                  <P.puzzle9
                    onMouseOver={() => handleMouseOver('index9')}
                    onMouseOut={() => handleMouseOut('index9')}
                    src={puzzleValue.index9 ? puzzle9Complete : isPuzzleHover.index9 ? puzzle9Click : puzzle9Default}
                    style={puzzleValue.index9 ? { top: '14.5rem' } : {}}
                  />
                </P.puzzleGrid>
              </P.puzzle>
            )
          ) : (
            <>
              <P.emptyPuzzle>
                <P.loginInfo>
                  <P.whiteErrorIcon src={whiteErrorIcon} />
                  로그인 후 이용가능합니다.
                </P.loginInfo>
              </P.emptyPuzzle>
            </>
          )}
        </P.puzzleGame>
      </P.currentPuzzleInfo>

      <P.endButton>
        {completed ? (
          <ButtonCommon text={'경품 수령'} color={`${palette.mainPurple}`} />
        ) : //onClick={handlecompleted}
        success ? (
          <ButtonCommon text={'퍼즐 완성'} color={`${palette.mainPurple}`} />
        ) : (
          //onClick={handleSuccess}
          <ButtonCommon text={'퍼즐 완성'} color={end ? `${palette.grayscale.text88}` : `${palette.grayscale.ca}`} />
        )}
      </P.endButton>
    </P.puzzlePage>
  );
}

export default Puzzle;
