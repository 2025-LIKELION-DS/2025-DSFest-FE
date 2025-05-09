import * as P from '@puzzle/PuzzleStyle';
import palette from '@styles/theme';
import { useEffect, useState, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import axios from 'axios';

import puzzleData from '@data/puzzleData.json';
import boothIcon from '@assets/puzzle/icon-booth.svg';
import whiteErrorIcon from '@assets/puzzle/icon-error-white.svg';
import glowPuzzleIcon from '@assets/puzzle/puzzle-piece-glow-1-grain.svg';
import lightIcon from '@assets/puzzle/icon-tip-lightbulb.svg';
import check from '@assets/puzzle/icon-check.svg';
import whiteCheck from '@assets/puzzle/icon-white-check.svg';
import redErrorIcon from '@assets/puzzle/icon-error-red.svg';
import phoneIcon from '@assets/puzzle/icon-mobile.svg';
import modalIcon from '@assets/puzzle/icon-pupple.svg';

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
import ModalPuzzleSelect from '@components/puzzle/ModalPuzzleSelect/ModalPuzzleSelect';
import ModalPuzzleApprove from '@components/puzzle/ModalPuzzleApprove/ModalPuzzleApprove';
import ModalPuzzleGoods from '@components/puzzle/ModalPuzzleGoods/ModalPuzzleGoods';

const API_KEY = import.meta.env.VITE_API_URL;

function Puzzle() {
  const navigate = useNavigate();

  const location = useLocation();
  const qrData = location.state?.qrData;
  const hasCheckedRef = useRef(false);

  const [username, setUsername] = useState('');
  const [puzzleCount, setPuzzleCount] = useState(0);
  const [remainPuzzleCount, setRemainPuzzleCount] = useState(9);
  const [showModal, setShowModal] = useState(false);
  const [modalProps, setModalProps] = useState('');
  const [qrSuccess, setQrSuccess] = useState(false);
  const [puzzleNumber, setPuzzleNumber] = useState(0);
  const [puzzleToast, setPuzzleToast] = useState(false);

  //qr 인증 성공 or 실패 모달 props
  const [value, setValue] = useState('');
  const [right, setRight] = useState(true);

  //로그인 됐을 때
  const [authorized, setAuthorized] = useState(false);
  //퍼즐 9개를 다 채웠을 때
  const [success, setSuccess] = useState(false);
  //퍼즐 완성을 눌렀을 때
  const [completed, setCompleted] = useState(false);
  //경품 수령 완료했을 때
  const [end, setEnd] = useState(false);

  //경품 수령 비밀번호 입력
  const [goodsPW, setGoodsPW] = useState('');
  const inputGoodsPw = (e) => {
    setGoodsPW(e.target.value);
  };

  const handleGoods = async (goodsPW) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${API_KEY}/bingo/reward`,
        { managerPassword: goodsPW },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.data.code === 'SUCCESS_REWARD_RECEIVED') {
        setShowModal('');
        setEnd(true);
        setCompleted(false);
      }
    } catch (error) {
      console.log(error);
      setRight(false);
    }
  };

  //새로고침해도 로그인 유지
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setAuthorized(true);
      const userInfo = async () => {
        try {
          const response = await axios.get(`${API_KEY}/users/confirm`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setUsername(response.data.data.username);
          await getPuzzleInfo();
        } catch (error) {
          console.error(error);
          setAuthorized(false);
          localStorage.removeItem('token');
        }
      };

      userInfo();
    }
  }, []);

  //퍼즐 상태 조회
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
        setPuzzleCount(response.data.data.filledCount);
        setRemainPuzzleCount(response.data.data.remainingCount);
        setEnd(response.data.data.prizeReceived);
        const filledIndex = response.data.data.filledIndexes;

        if (response.data.data.filledCount === 9) {
          if (!end) {
            setSuccess(true);
          }
        }

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
      console.error(error);
    }
  };

  const [loginErrorMessage, setLoginErrorMessage] = useState('');

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

  //부스 힌트 모달
  const puzzleHandler = (index) => {
    setModalProps(puzzleData[index]);
    setShowModal('hintModal');
  };

  //모달 외의 공간 누르면 모달 닫기
  const modalOffHandler = () => {
    setShowModal('');
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
        setLoginFailed(false);
        setAuthorized(true);
        await getPuzzleInfo();
      }
    } catch (error) {
      console.log(error.response.data);
      setLoginFailed(true);
      if (error.response.data.error === 'DUPLICATE_USERNAME') {
        setLoginErrorMessage('중복된 닉네임 혹은 틀린 비밀번호입니다.');
      } else if (error.response.data.error === 'BAD_REQUEST') {
        setLoginErrorMessage('닉네임은 최대 10자까지 입력 가능합니다.');
      }
    }
  };

  //QR
  const showQrCamera = () => {
    navigate('/camera', {
      state: { puzzleNumber: puzzleNumber },
    });
  };

  useEffect(() => {
    if (location.state?.puzzleNumber !== undefined) {
      setPuzzleNumber(location.state?.puzzleNumber);
    }
  }, [location.state]);

  //qr 데이터 받아오기
  useEffect(() => {
    if (!qrData || hasCheckedRef.current) return;
    hasCheckedRef.current = true;

    qrCheck(qrData);
  }, [qrData]);

  //qr 인증
  const qrCheck = async (qrData) => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${API_KEY}/bingo/qr`,
        { value: qrData, puzzleIndex: location.state?.puzzleNumber },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(response.data);
      if (response.data.code === 'SUCCESS_BINGO_FILL') {
        if (response.data.data.success === false) {
          console.log('이미 인증');
        } else {
          setQrSuccess(true);
          setModalProps({
            state: true,
            number: response.data.data.puzzleIndex,
            boothName: response.data.data.placeName,
          });
          setShowModal('qrCheckModal');
        }
      }
    } catch (error) {
      console.log(error.response.data.error);
      if (error.response.data.error) {
        setPuzzleToast(true);
      } else {
        setQrSuccess(false);
        setModalProps({
          state: false,
        });
        setShowModal('qrCheckModal');
      }
    } finally {
      navigate(location.pathname, { replace: true, state: {} });
    }
  };

  //비밀번호 인증
  const boothCheckHandler = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        `${API_KEY}/bingo/password`,
        { value },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      if (response.data.code === 'SUCCESS_BINGO_FILL') {
        if (response.data.data.success === false) {
          //이미 완성된 퍼즐
        } else {
          setQrSuccess(true);
          setModalProps({
            state: true,
            number: response.data.data.puzzleIndex,
            boothName: response.data.data.placeName,
          });
          setShowModal('qrCheckModal');
          await getPuzzleInfo();
        }
      }
    } catch (error) {
      console.log(error.response.data.message);
      setQrSuccess(false);
      setRight(false);
      setModalProps({
        state: false,
      });
      setShowModal('qrCheckModal');
    }
  };

  // 미션 성공 시 퍼즐 이미지 변경
  const puzzleSuccessHandler = (i) => {
    setPuzzleValue((prev) => ({
      ...prev,
      [`index${i}`]: true,
    }));
    setShowModal('');
  };

  const handleSuccess = () => {
    setSuccess(false);
    setCompleted(true);
  };

  const handlecompleted = () => {
    setShowModal('goodsModal');
  };

  //지도 이동
  const goMap = (i) => {
    i += 91;
    navigate('/map', { state: { i } });
  };

  //기기가 모바일인지 확인
  const mobile = useMediaQuery({
    query: '(hover: none) and (pointer: coarse)',
  });
  const galaxy = /Android|Tablet/i.test(window.navigator.userAgent);

  const [cameraOverlay, setCameraOverlay] = useState(false);

  const puzzleBtnHandler = () => {
    if (!mobile && !galaxy) {
      setCameraOverlay(true);
    } else {
      showQrCamera();
    }
  };

  //overlay 화면 3초 후 꺼지도록
  useEffect(() => {
    if (cameraOverlay) {
      const timer = setTimeout(() => {
        setCameraOverlay(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [cameraOverlay]);

  return (
    <P.puzzlePage>
      <P.puzzleMain onClick={() => (showModal ? modalOffHandler() : undefined)}>
        <P.currentPuzzleInfo>
          <P.TopContainer>
            <P.top>
              {completed || end ? (
                <P.celebration>
                  <P.semibold20>축하드립니다!</P.semibold20>
                  <P.semibold20>모든 퍼즐이 완성되었어요.</P.semibold20>
                </P.celebration>
              ) : (
                <>
                  <P.puzzleInfo1>아래 퍼즐을 완성하고</P.puzzleInfo1>
                  <P.puzzleInfo2>
                    <P.goMap onClick={() => goMap(1)}>
                      <P.boothIcon>
                        <img src={boothIcon} alt="총학 중앙본부" />
                      </P.boothIcon>
                      <P.purplesemibold16>총학 중앙본부</P.purplesemibold16>
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
                    <P.completedPuzzleCount>{puzzleCount}</P.completedPuzzleCount>
                    <P.completedPuzzleCountInfo>개</P.completedPuzzleCountInfo>
                  </P.puzzleCount>
                </P.completedPuzzleBox>
              </P.completedPuzzle>
            ) : (
              <P.login
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && isLoginEnabled) {
                    handleLogin();
                  }
                }}>
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
                  onClick={isLoginEnabled ? () => handleLogin() : null}
                />
                {loginFailed ? (
                  <P.loginFailed>
                    <img src={redErrorIcon} />
                    <P.loginFailedInfo>{loginErrorMessage}</P.loginFailedInfo>
                  </P.loginFailed>
                ) : (
                  <></>
                )}
              </P.login>
            )}
          </P.TopContainer>

          <P.puzzleGame>
            {authorized ? (
              completed ? (
                <>
                  <P.presentInfo>
                    <P.goMap onClick={() => goMap(1)}>
                      <P.boothIcon>
                        <img src={boothIcon} alt="총학 중앙본부" />
                      </P.boothIcon>
                      <P.purplesemibold16>총학 중앙본부</P.purplesemibold16>
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
                <P.puzzle onClick={(e) => e.stopPropagation()}>
                  <P.puzzleGrid>
                    <P.puzzle1
                      onClick={() => {
                        puzzleValue.index1 ? null : puzzleHandler(0);
                        setPuzzleNumber(1);
                      }}
                      onMouseOver={() => handleMouseOver('index1')}
                      onMouseOut={() => handleMouseOut('index1')}
                      src={puzzleValue.index1 ? puzzle1Complete : isPuzzleHover.index1 ? puzzle1Click : puzzle1Default}
                    />
                    <P.puzzle2
                      onClick={() => {
                        puzzleValue.index2 ? null : puzzleHandler(1);
                        setPuzzleNumber(2);
                      }}
                      onMouseOver={() => handleMouseOver('index2')}
                      onMouseOut={() => handleMouseOut('index2')}
                      src={puzzleValue.index2 ? puzzle2Complete : isPuzzleHover.index2 ? puzzle2Click : puzzle2Default}
                    />
                    <P.puzzle3
                      onClick={() => {
                        setPuzzleNumber(3);
                        puzzleValue.index3 ? null : puzzleHandler(2);
                      }}
                      onMouseOver={() => handleMouseOver('index3')}
                      onMouseOut={() => handleMouseOut('index3')}
                      src={puzzleValue.index3 ? puzzle3Complete : isPuzzleHover.index3 ? puzzle3Click : puzzle3Default}
                    />
                    <P.puzzle4
                      onClick={() => {
                        setPuzzleNumber(4);
                        puzzleValue.index4 ? null : puzzleHandler(3);
                      }}
                      onMouseOver={() => handleMouseOver('index4')}
                      onMouseOut={() => handleMouseOut('index4')}
                      src={puzzleValue.index4 ? puzzle4Complete : isPuzzleHover.index4 ? puzzle4Click : puzzle4Default}
                    />
                    <P.puzzle5
                      onClick={() => {
                        setPuzzleNumber(5);
                        puzzleValue.index5 ? null : puzzleHandler(4);
                      }}
                      onMouseOver={() => handleMouseOver('index5')}
                      onMouseOut={() => handleMouseOut('index5')}
                      src={puzzleValue.index5 ? puzzle5Complete : isPuzzleHover.index5 ? puzzle5Click : puzzle5Default}
                    />
                    <P.puzzle6
                      onClick={() => {
                        setPuzzleNumber(6);
                        puzzleValue.index6 ? null : puzzleHandler(5);
                      }}
                      onMouseOver={() => handleMouseOver('index6')}
                      onMouseOut={() => handleMouseOut('index6')}
                      src={puzzleValue.index6 ? puzzle6Complete : isPuzzleHover.index6 ? puzzle6Click : puzzle6Default}
                    />
                    <P.puzzle7
                      onClick={() => {
                        setPuzzleNumber(7);
                        puzzleValue.index7 ? null : puzzleHandler(6);
                      }}
                      onMouseOver={() => handleMouseOver('index7')}
                      onMouseOut={() => handleMouseOut('index7')}
                      src={puzzleValue.index7 ? puzzle7Complete : isPuzzleHover.index7 ? puzzle7Click : puzzle7Default}
                    />
                    <P.puzzle8
                      onClick={() => {
                        setPuzzleNumber(8);
                        puzzleValue.index8 ? null : puzzleHandler(7);
                      }}
                      onMouseOver={() => handleMouseOver('index8')}
                      onMouseOut={() => handleMouseOut('index8')}
                      src={puzzleValue.index8 ? puzzle8Complete : isPuzzleHover.index8 ? puzzle8Click : puzzle8Default}
                    />
                    <P.puzzle9
                      onClick={() => {
                        setPuzzleNumber(9);
                        puzzleValue.index9 ? null : puzzleHandler(8);
                      }}
                      onMouseOver={() => handleMouseOver('index9')}
                      onMouseOut={() => handleMouseOut('index9')}
                      src={puzzleValue.index9 ? puzzle9Complete : isPuzzleHover.index9 ? puzzle9Click : puzzle9Default}
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
            <ButtonCommon text={'경품 수령'} color={`${palette.mainPurple}`} onClick={handlecompleted} />
          ) : end ? (
            <ButtonCommon text={'퍼즐 완성'} color={`${palette.grayscale.text88}`} onClick={null} />
          ) : (
            <ButtonCommon
              text={'퍼즐 완성'}
              color={success ? `${palette.mainPurple}` : `${palette.grayscale.ca}`}
              onClick={success ? handleSuccess : null}
            />
          )}
        </P.endButton>

        {cameraOverlay && (
          <P.ovelay onClick={() => setCameraOverlay(false)}>
            <img src={phoneIcon} />
            <P.whiteSemibold20>모바일에서만 지원되는 기능입니다.</P.whiteSemibold20>
            <P.whiteSemibold20>모바일로 접속해주세요.</P.whiteSemibold20>
          </P.ovelay>
        )}
      </P.puzzleMain>

      <P.modal onClick={(e) => e.stopPropagation()}>
        {/* 퍼즐 눌렀을 때 힌트 모달창 */}
        {showModal === 'hintModal' && modalProps && (
          <ModalPuzzleSelect
            number={modalProps.number}
            boothName={modalProps.boothName}
            boothInfo={modalProps.boothInfo}
            boothHint={modalProps.boothHint}
            onClickL={() => goMap(modalProps.number)}
            onClickR={() => puzzleBtnHandler()}
            onClose={() => modalOffHandler()}
          />
        )}
        {/* qr 인증 성공 or 실패 모달 */}
        {showModal === 'qrCheckModal' &&
          modalProps &&
          (qrSuccess ? (
            <ModalPuzzleApprove
              state={true}
              number={modalProps.number}
              boothName={modalProps.boothName}
              onClick={() => puzzleSuccessHandler(modalProps.number)}
              onClose={() => modalOffHandler()}
            />
          ) : (
            <ModalPuzzleApprove
              state={false}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              right={right}
              onClickL={() => showQrCamera()}
              onClickR={() => boothCheckHandler()}
              onClose={() => modalOffHandler()}
            />
          ))}
        {showModal === 'goodsModal' && (
          <ModalPuzzleGoods
            value={goodsPW}
            onChange={inputGoodsPw}
            onClickL={() => modalOffHandler()}
            onClickR={() => handleGoods(goodsPW)}
            onClose={() => modalOffHandler()}
            right={right}
          />
        )}
      </P.modal>
      {puzzleToast && (
        <P.ToastBox>
          <P.ToastContent>
            <img src={modalIcon} />
            <P.ToastMessage>퍼즐 번호에 맞는 QR코드를 스캔해주세요</P.ToastMessage>
          </P.ToastContent>
        </P.ToastBox>
      )}
    </P.puzzlePage>
  );
}

export default Puzzle;
