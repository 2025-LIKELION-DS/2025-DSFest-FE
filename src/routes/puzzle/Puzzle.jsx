import * as P from '@puzzle/PuzzleStyle';
import palette from '@styles/theme';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import boothIcon from '@assets/puzzle/icon-booth.svg';
import whiteErrorIcon from '@assets/puzzle/icon-error-white.svg';
import glowPuzzleIcon from '@assets/puzzle/puzzle-piece-glow-1-grain.svg';
import lightIcon from '@assets/puzzle/icon-tip-lightbulb.svg';
import check from '@assets/puzzle/icon-check.svg';
import whiteCheck from '@assets/puzzle/icon-white-check.svg';
import redErrorIcon from '@assets/puzzle/icon-error-red.svg';

import puzzle1Default from '@assets/puzzle/puzzle_default-1.png';
import puzzle2Default from '@assets/puzzle/puzzle_default-2.png';
import puzzle3Default from '@assets/puzzle/puzzle_default-3.png';
import puzzle4Default from '@assets/puzzle/puzzle_default-4.png';
import puzzle5Default from '@assets/puzzle/puzzle_default-5.png';
import puzzle6Default from '@assets/puzzle/puzzle_default-6.png';
import puzzle7Default from '@assets/puzzle/puzzle_default-7.png';
import puzzle8Default from '@assets/puzzle/puzzle_default-8.png';
import puzzle9Default from '@assets/puzzle/puzzle_default-9.png';

import puzzle1Click from '@assets/puzzle/puzzle_click-1.png';
import puzzle2Click from '@assets/puzzle/puzzle_click-2.png';
import puzzle3Click from '@assets/puzzle/puzzle_click-3.png';
import puzzle4Click from '@assets/puzzle/puzzle_click-4.png';
import puzzle5Click from '@assets/puzzle/puzzle_click-5.png';
import puzzle6Click from '@assets/puzzle/puzzle_click-6.png';
import puzzle7Click from '@assets/puzzle/puzzle_click-7.png';
import puzzle8Click from '@assets/puzzle/puzzle_click-8.png';
import puzzle9Click from '@assets/puzzle/puzzle_click-9.png';

import puzzle1Complete from '@assets/puzzle/puzzle_complete_1.png';
import puzzle2Complete from '@assets/puzzle/puzzle_complete_2.png';
import puzzle3Complete from '@assets/puzzle/puzzle_complete_3.png';
import puzzle4Complete from '@assets/puzzle/puzzle_complete_4.png';
import puzzle5Complete from '@assets/puzzle/puzzle_complete_5.png';
import puzzle6Complete from '@assets/puzzle/puzzle_complete_6.png';
import puzzle7Complete from '@assets/puzzle/puzzle_complete_7.png';
import puzzle8Complete from '@assets/puzzle/puzzle_complete_8.png';
import puzzle9Complete from '@assets/puzzle/puzzle_complete_9.png';

import ButtonCommon from '@components/ButtonCommon/ButtonCommon.jsx';
import InputLogin from '@components/puzzle/InputLogin/InputLogin';
import ButtonModalDual from '@components/puzzle/ButtonModalDual/ButtonModalDual';
import ButtonModalSingle from '@components/puzzle/ButtonModalSingle/ButtonModalSingle';
import ModalPuzzleSelect from '@components/puzzle/ModalPuzzleSelect/ModalPuzzleSelect';
import ModalPuzzleApprove from '@components/puzzle/ModalPuzzleApprove/ModalPuzzleApprove';
import ModalPuzzleGoods from '@components/puzzle/ModalPuzzleGoods/ModalPuzzleGoods';

const API_KEY = import.meta.env.VITE_API_URL;

function Puzzle() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [userPuzzleCount, setPuzzleCount] = useState(0);
  const [remainPuzzleCount, setRemainPuzzleCount] = useState(9);

  //로그인 됐을 때
  const [authorized, setAuthorized] = useState(false);
  //퍼즐 9개를 다 채웠을 때
  const [success, setSuccess] = useState(false);
  //퍼즐 완성을 눌렀을 때
  const [completed, setCompleted] = useState(false);
  //경품 수령 완료했을 때
  const [end, setEnd] = useState(false);

  //새로고침해도 로그인 유지
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setAuthorized(true);
    }
  }, []);

  const [inputLoginID, setInputLoginID] = useState('');
  const inputLoginIDChange = (e) => {
    setInputLoginID(e.target.value);
  };

  const [inputLoginPWD, setInputLoginPWD] = useState('');
  const inputLoginPWDChange = (e) => {
    setInputLoginPWD(e.target.value);
  };

  const isLoginEnabled = inputLoginID && inputLoginPWD;
  const [loginFailed, setLoginFailed] = useState(false);

  const [puzzleValue, setPuzzleValue] = useState({
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

  //로그인
  const handleLogin = async () => {
    try {
      const response = await axios.post(
        `${API_KEY}/users/login`,
        { username: inputLoginID, password: inputLoginPWD },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      if (response.data.code === 'SUCCESS_LOGIN') {
        localStorage.setItem('token', response.data.data.token);
        setUsername(response.data.data.user.username);
        console.log(response.data);
        setLoginFailed(false);
        setAuthorized(true);
      }
    } catch (error) {
      console.log(error.response.data.message);
      setLoginFailed(true);
    }
  };

  //퍼즐 상태 조회
  useEffect(() => {
    const getPuzzleInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(`${API_KEY}/bingo/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.data.code === 'SUCCESS_USER_BINGO_STATUS') {
          setAuthorized(true);
          console.log(response.data.message);
          setPuzzleCount(response.data.data.filledCount);
          setRemainPuzzleCount(response.data.data.remainingCount);
          const filledIndex = response.data.data.filledIndexes;

          setPuzzleValue((prev) => {
            const updated = { ...prev };
            for (let i = 1; i < 10; i++) {
              if (filledIndex.includes(i)) {
                updated[`index${i}`] = true;
              }
            }
            return updated;
          });
        }
      } catch (error) {
        console.error('Error fetching puzzle info:', error);
      }
    };

    getPuzzleInfo();
  }, []);

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
                <P.userName>{username}</P.userName>
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
                    <P.todoPuzzleCount>{remainPuzzleCount}개</P.todoPuzzleCount>
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
                <P.completedPuzzleCount>{userPuzzleCount}</P.completedPuzzleCount>
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
              onClick={handleLogin}
            />
            {loginFailed ? (
              <P.loginFailed>
                <img src={redErrorIcon} />
                <P.loginFailedInfo>중복된 닉네임 혹은 틀린 비밀번호입니다.</P.loginFailedInfo>
              </P.loginFailed>
            ) : (
              <></>
            )}
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
                  <img src={lightIcon} style={{ marginBottom: '10px' }} />
                  <P.regular14 style={{ marginBottom: '7px' }}>
                    퍼즐을 다 맞춘 덕우에게는 행운의 기회가 주어집니다!
                  </P.regular14>
                  <P.regular14 style={{ marginBottom: '7px' }}>
                    <P.bold14>총학생회 중앙본부</P.bold14>에 방문해 퍼즐 완성 화면을 보여주신다면, 총학생회 관계자가
                    비밀번호를 입력하고 <P.bold14>스크래치 복권</P.bold14>을 드릴 거예요.
                  </P.regular14>
                  <P.regular14 style={{ marginBottom: '7px' }}>과연 복권에 적혀있는 행운은 무엇일까요?</P.regular14>
                  <P.regular14 style={{ marginBottom: '3px' }}>1. 여운의 분위기를 가득 담은 실물 퍼즐✨</P.regular14>
                  <P.regular14 style={{ marginBottom: '3px' }}>2. 운율의 상징인 라벤더 씨앗🪻</P.regular14>
                  <P.regular14 style={{ marginBottom: '3px' }}>3. 잘 키우면 유용한 바질 씨앗🌱</P.regular14>
                  <P.regular14>4. 꽝💣 하지만 퍼즐을 즐기며 만난 여운의 즐거움을 잊지 마세요!</P.regular14>
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
                    style={puzzleValue.index1 ? { transform: 'scale(0.935)' } : {}}
                  />
                  <P.puzzle2
                    onMouseOver={() => handleMouseOver('index2')}
                    onMouseOut={() => handleMouseOut('index2')}
                    src={puzzleValue.index2 ? puzzle2Complete : isPuzzleHover.index2 ? puzzle2Click : puzzle2Default}
                    style={puzzleValue.index2 ? { transform: 'scale(0.935)' } : {}}
                  />
                  <P.puzzle3
                    onMouseOver={() => handleMouseOver('index3')}
                    onMouseOut={() => handleMouseOut('index3')}
                    src={puzzleValue.index3 ? puzzle3Complete : isPuzzleHover.index3 ? puzzle3Click : puzzle3Default}
                    style={puzzleValue.index3 ? { transform: 'scale(0.935)' } : {}}
                  />
                  <P.puzzle4
                    onMouseOver={() => handleMouseOver('index4')}
                    onMouseOut={() => handleMouseOut('index4')}
                    src={puzzleValue.index4 ? puzzle4Complete : isPuzzleHover.index4 ? puzzle4Click : puzzle4Default}
                    style={puzzleValue.index4 ? { transform: 'scale(0.935)' } : {}}
                  />
                  <P.puzzle5
                    onMouseOver={() => handleMouseOver('index5')}
                    onMouseOut={() => handleMouseOut('index5')}
                    src={puzzleValue.index5 ? puzzle5Complete : isPuzzleHover.index5 ? puzzle5Click : puzzle5Default}
                    style={{
                      transform: puzzleValue.index5 ? 'scale(0.935)' : ' ',
                      transition: 'transform 0.3s ease-in-out, opacity 0.3s ease-in-out',
                    }}
                  />
                  <P.puzzle6
                    onMouseOver={() => handleMouseOver('index6')}
                    onMouseOut={() => handleMouseOut('index6')}
                    src={puzzleValue.index6 ? puzzle6Complete : isPuzzleHover.index6 ? puzzle6Click : puzzle6Default}
                    style={puzzleValue.index6 ? { transform: 'scale(0.935)' } : {}}
                  />
                  <P.puzzle7
                    onMouseOver={() => handleMouseOver('index7')}
                    onMouseOut={() => handleMouseOut('index7')}
                    src={puzzleValue.index7 ? puzzle7Complete : isPuzzleHover.index7 ? puzzle7Click : puzzle7Default}
                    style={puzzleValue.index7 ? { transform: 'scale(0.935)' } : {}}
                  />
                  <P.puzzle8
                    onMouseOver={() => handleMouseOver('index8')}
                    onMouseOut={() => handleMouseOut('index8')}
                    src={puzzleValue.index8 ? puzzle8Complete : isPuzzleHover.index8 ? puzzle8Click : puzzle8Default}
                    style={puzzleValue.index8 ? { transform: 'scale(0.935)' } : {}}
                  />
                  <P.puzzle9
                    onMouseOver={() => handleMouseOver('index9')}
                    onMouseOut={() => handleMouseOut('index9')}
                    src={puzzleValue.index9 ? puzzle9Complete : isPuzzleHover.index9 ? puzzle9Click : puzzle9Default}
                    style={puzzleValue.index9 ? { transform: 'scale(0.93)' } : {}}
                  />
                </P.puzzleGrid>
              </P.puzzle>
            )
          ) : (
            <>
              <P.emptyPuzzle style={loginFailed ? { marginTop: '0' } : {}}>
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
