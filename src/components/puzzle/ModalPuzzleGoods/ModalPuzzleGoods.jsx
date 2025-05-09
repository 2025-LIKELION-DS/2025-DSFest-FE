import * as M from '@components/puzzle/ModalPuzzleGoods/ModalPuzzleGoodsStyle';

import Glow1 from '@assets/puzzle/puzzle-piece-glow-1-grain.svg';
import Glow2 from '@assets/puzzle/puzzle-piece-glow-2-grain.svg';
import Close from '@assets/puzzle/Modal-close.svg';

import ButtonModalDual from '@components/puzzle/ButtonModalDual/ButtonModalDual';
import InputCommon from '@components/InputCommon/InputCommon';

/**
 * 퍼즐 페이지에서 사용되는 모달 컴포넌트입니다.
 * 경품 수령을 선택했을 때 나타나는 컴포넌트입니다.
 *
 * @param {string} value -- value 내용
 * @param {function} onChange -- input의 onChange 함수
 * @param {function} onClickL -- 왼쪽 버튼(취소 버튼) 클릭 시 실행될 함수
 * @param {function} onClickR -- 오른쪽 버튼(수령 완료 버튼) 클릭 시 실행될 함수
 * @param {function} onClose -- 모달 닫을 때 사용될 함수
 *
 * @author 김진효
 * **/

const ModalPuzzleGoods = ({ value, onChange, onClickL, onClickR, onClose }) => {
  return (
    <>
      <M.ModalPuzzleSelect>
        <M.ImgContainer width={'115px'} $top={'-5%'} $left={'-5%'}>
          <img src={Glow1} alt="퍼즐1" />
        </M.ImgContainer>

        <M.ImgContainer width={'75px'} $top={'8%'} $left={'13%'}>
          <img src={Glow2} alt="퍼즐2" />
        </M.ImgContainer>

        <M.CloseDiv onClick={onClose}>
          <img src={Close} alt="모달 닫기" />
        </M.CloseDiv>

        <M.FlexContainer>
          <M.ModalContainer>
            <M.Text>
              총학생회 본부를 방문하여,
              <br /> 해당 화면을 관계자에게 보여주세요.
            </M.Text>
          </M.ModalContainer>
          <M.FlexText>
            <InputCommon
              placeholder={'관계자 비밀번호를 입력해주세요.'}
              height="48px"
              value={value}
              onChange={onChange}
            />
          </M.FlexText>
          <ButtonModalDual contentL={'취소'} onClickL={onClickL} contentR={'수령 완료'} onClickR={onClickR} />
        </M.FlexContainer>
      </M.ModalPuzzleSelect>
    </>
  );
};

export default ModalPuzzleGoods;
