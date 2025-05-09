import * as B from '@components/puzzle/ModalPuzzleApprove/ModalPuzzleApproveStyle';

import Complete from '@assets/puzzle/puzzle-piece-black-complete.png';
import Glow from '@assets/puzzle/puzzle-piece-glow1_1.png';
import Fail from '@assets/puzzle/puzzle-piece-black-fail.png';
import Warning from '@assets/puzzle/icon-error-red.svg';
import Close from '@assets/puzzle/Modal-close.svg';

import ButtonModalSingle from '@components/puzzle/ButtonModalSingle/ButtonModalSingle';
import InputCommon from '@components/InputCommon/InputCommon';
import ButtonModalDual from '@components/puzzle/ButtonModalDual/ButtonModalDual';

/**
 * puzzle 모달에서 사용되는 인증 관련 컴포넌트입니다.
 * 인증 완료, 인증 실패 등에 사용됩니다.
 *
 * @param {boolean} state -- 인증 완료 및 실패를 나타내는 state 값 (true or false)
 * @param {number} number -- 몇번째 부스인지
 * @param {string} boothName -- 부스 이름
 *
 * 인증 완료 --
 * @param {function} onClick -- 인증 완료에서 완료 버튼 누를 때 실행될 함수
 *
 * 인증 실패 --
 * @param {string} value -- value 내용
 * @param {function} onChange -- input의 onChange 함수
 * @param {boolean} right -- 비밀번호가 일치하는지 나타내는 state 값 (true or false)
 * @param {function} onClickL -- QR코드 재인증 버튼 누를 때 실행될 함수
 * @param {function} onClickR -- 비밀번호 입력 버튼 누를 때 실행될 함수
 * @param {function} onClose -- 모달 닫을 때 사용될 함수
 *
 * ex) <ModalPuzzleApprove state={false} number={1} boothName={"멋쟁이사자처럼"} onClick={onClick} value={value} onChange={(e)=>setValue(e.target.value)} right={right} onClickL={onclickL} onClickR={onClickR}  />
 * state true 일 때 -> state, number, boothName, onClick 넘기면 되고,
 * false 일 때 -> state, value, onChange, right, onClickL, onClickR 넘기면 됩니다.
 *
 * @author 김진효
 * **/

const ModalPuzzleApprove = ({
  state,
  number,
  boothName,
  onClick,
  value,
  onChange,
  right,
  onClickL,
  onClickR,
  onClose,
}) => {
  return (
    <>
      {/* 인증 완료 */}
      {state && (
        <B.ModalPuzzleSelect>
          <B.ModalFlex>
            <B.BoothContainer>
              <B.ImgContainer width={'54px'}>
                <img src={Complete} alt="완료" />
              </B.ImgContainer>
              <div>
                <B.Complete>인증 완료</B.Complete>
              </div>
            </B.BoothContainer>

            <B.CloseDiv onClick={onClose}>
              <img src={Close} alt="모달 닫기" />
            </B.CloseDiv>

            <B.PaddingContainer>
              <B.ColLine></B.ColLine>
              <B.ImgMargin width={'70px'}>
                <img src={Glow} alt="퍼즐" />
              </B.ImgMargin>
              <B.Div>
                <B.Text>{number}번 퍼즐</B.Text>
                <B.Text>
                  <B.BoothName>{boothName}</B.BoothName>
                </B.Text>
              </B.Div>
            </B.PaddingContainer>
          </B.ModalFlex>
          <ButtonModalSingle text={'완료'} onClick={onClick} />
        </B.ModalPuzzleSelect>
      )}

      {/* 인증 실패 */}
      {!state && (
        <B.ModalPuzzleSelect>
          <B.ModalContainer>
            <B.BoothContainer>
              <B.ImgContainer width={'54px'}>
                <img src={Fail} alt="실패" />
              </B.ImgContainer>
              <div>
                <B.Complete>인증 실패</B.Complete>
              </div>
            </B.BoothContainer>
          </B.ModalContainer>

          <B.CloseDiv onClick={onClose}>
            <img src={Close} alt="모달 닫기" />
          </B.CloseDiv>

          <B.InputDiv>
            <InputCommon
              placeholder={'부스 비밀번호를 입력해주세요.'}
              height="48px"
              value={value}
              onChange={onChange}
            />
            {!right && (
              <B.Warning>
                <img src={Warning} alt="오류" />
                <p>비밀번호를 다시 확인해주세요.</p>
              </B.Warning>
            )}
          </B.InputDiv>

          <ButtonModalDual contentL={'QR코드 재인증'} onClickL={onClickL} contentR={'완료'} onClickR={onClickR} />
        </B.ModalPuzzleSelect>
      )}
    </>
  );
};

export default ModalPuzzleApprove;
