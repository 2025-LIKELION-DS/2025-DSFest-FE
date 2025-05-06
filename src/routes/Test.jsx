import { useState } from 'react';
import palette from '@styles/theme';

import InputAdmin from '@components/admin/InputAdmin/InputAdmin';
import ButtonAdminSingle from '@components/admin/ButtonAdminSingle/ButtonAdminSingle';
import ButtonAdminDual from '@components/admin/ButtonAdminDual/ButtonAdminDual';
import ModalAdmin from '@components/admin/ModalAdmin/ModalAdmin';
import InputLogin from '@components/puzzle/InputLogin/InputLogin';
import ButtonModalDual from '@components/puzzle/ButtonModalDual/ButtonModalDual';
import ButtonModalSingle from '@components/puzzle/ButtonModalSingle/ButtonModalSingle';
import ModalPuzzleSelect from '@components/puzzle/ModalPuzzleSelect/ModalPuzzleSelect';
import ModalPuzzleApprove from '@components/puzzle/ModalPuzzleApprove/ModalPuzzleApprove';
import ModalPuzzleGoods from '@components/puzzle/ModalPuzzleGoods/ModalPuzzleGoods';

import Down from '@assets/admin/icon-download.svg?react';
import Send from '@assets/admin/icon-send.svg?react';

const Test = () => {
  const [inputAdminID, setInputAdminID] = useState('');
  const inputAdminIDChange = (e) => {
    setInputAdminID(e.target.value);
  };

  const [inputAdminPWD, setInputAdminPWD] = useState('');
  const inputAdminPWDChange = (e) => {
    setInputAdminPWD(e.target.value);
  };

  const buttonAdminSingleClick = () => {
    alert('button_admin_single 클릭');
  };

  const buttonAdminDualLeftClick = () => {
    alert('button_admin_dual 왼쪽버튼 클릭');
  };

  const buttonAdminDualRightClick = () => {
    alert('button_admin_dual 오른쪽버튼 클릭');
  };

  const moadlAdminClose = () => {
    alert('moadl_admin 취소');
  };

  const moadlAdminConfirm = () => {
    alert('moadl_admin 확인 / 삭제');
  };

  const [inputLoginID, setInputLoginID] = useState('');
  const inputLoginIDChange = (e) => {
    setInputLoginID(e.target.value);
  };

  const [inputLoginPWD, setInputLoginPWD] = useState('');
  const inputLoginPWDChange = (e) => {
    setInputLoginPWD(e.target.value);
  };

  const buttonModalDualLeftClick = () => {
    alert('button_modal_daul 왼쪽버튼 클릭');
  };

  const buttonModalDualRightClick = () => {
    alert('button_modal_dual 오른쪽버튼 클릭');
  };

  const buttonModalSingleClick = () => {
    alert('button_modal_single 클릭');
  };

  const modalPuzzleApproveClick = () => {
    alert('modal_puzzle_approve 완료 클릭');
  };

  const [modalPuzzleApprove, setModalPuzzleApprove] = useState('');
  const modalPuzzleApproveChange = (e) => {
    setModalPuzzleApprove(e.target.value);
  };

  const [right, setIsRight] = useState(true);

  const isRight = () => {
    if (modalPuzzleApprove !== 111) {
      setIsRight((prev) => !prev);
    }
  };

  const modalPuzzleApproveLeftClick = () => {
    alert('modal_puzzle_approve QR코드 재인증 클릭');
  };

  const modalPuzzleApproveRightClick = () => {
    isRight();
  };

  const [modalPuzzleGoods, setModalPuzzleGoods] = useState('');
  const modalPuzzleGoodsChange = (e) => {
    setModalPuzzleGoods(e.target.value);
  };

  const modalPuzzleGoodsClick = () => {
    alert('관계자 비밀번호 입력');
  };

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: 'transparent' }}>
        <div>📌admin</div>
        <div>✔️Input_admin</div>
        <InputAdmin placeholder={'아이디'} type={'text'} value={inputAdminID} onChange={inputAdminIDChange} />
        <InputAdmin placeholder={'비밀번호'} type={'password'} value={inputAdminPWD} onChange={inputAdminPWDChange} />

        <div>✔️Button_admin_single</div>
        <ButtonAdminSingle text={'작성하기'} color={palette.mainPurple} onClick={buttonAdminSingleClick} />
        <ButtonAdminSingle text={'생성'} color={palette.mainPurple} onClick={buttonAdminSingleClick} />
        <ButtonAdminSingle text={'목록에 저장'} color={palette.mainPurple} onClick={buttonAdminSingleClick} />
        <ButtonAdminSingle text={'공지사항'} color={palette.grayscale.white} onClick={buttonAdminSingleClick} />
        <ButtonAdminSingle
          text={'부스 QR 및 비밀번호 생성'}
          color={palette.grayscale.white}
          onClick={buttonAdminSingleClick}
        />
        <ButtonAdminSingle
          text={'부스 QR 및 비밀번호 목록'}
          color={palette.grayscale.white}
          onClick={buttonAdminSingleClick}
        />

        <div>✔️Button_admin_dual</div>
        <ButtonAdminDual
          contentL={'수정'}
          colorL={palette.grayscale.white}
          onClickL={buttonAdminDualLeftClick}
          contentR={'삭제'}
          colorR={palette.grayscale.white}
          onClickR={buttonAdminDualRightClick}
        />
        <ButtonAdminDual
          contentL={<Down />}
          colorL={palette.grayscale.white}
          onClickL={buttonAdminDualLeftClick}
          contentR={<Send />}
          colorR={palette.grayscale.white}
          onClickR={buttonAdminDualRightClick}
        />

        <div>✔️Moadl_admin</div>
        <ModalAdmin
          text={'공지사항을 수정하시겠습니까?'}
          confirmText={'확인'}
          onClose={moadlAdminClose}
          onConfirm={moadlAdminConfirm}
        />
        <ModalAdmin
          text={'공지사항을 업로드하시겠습니까?'}
          confirmText={'확인'}
          onClose={moadlAdminClose}
          onConfirm={moadlAdminConfirm}
        />
        <ModalAdmin
          text={'공지사항을 삭제하시겠습니까?'}
          confirmText={'삭제'}
          onClose={moadlAdminClose}
          onConfirm={moadlAdminConfirm}
        />

        <div>📌puzzle</div>
        <div>✔️Input_login</div>
        <InputLogin
          placeholder={'닉네임을 입력해주세요'}
          type={'text'}
          value={inputLoginID}
          onChange={inputLoginIDChange}
        />
        <InputLogin
          placeholder={'비밀번호를 입력해주세요'}
          type={'password'}
          value={inputLoginPWD}
          onChange={inputLoginPWDChange}
        />

        <div>✔️Button_modal_dual</div>
        <ButtonModalDual
          contentL={'부스 위치 확인'}
          onClickL={buttonModalDualLeftClick}
          contentR={'퍼즐 채우기'}
          onClickR={buttonModalDualRightClick}
        />
        <ButtonModalDual
          contentL={'QR코드 재인증'}
          onClickL={buttonModalDualLeftClick}
          contentR={'비밀번호 입력'}
          onClickR={buttonModalDualRightClick}
        />
        <ButtonModalDual
          contentL={'이전'}
          onClickL={buttonModalDualLeftClick}
          contentR={'수령 완료'}
          onClickR={buttonModalDualRightClick}
        />

        <div>✔️Button_modal_single</div>
        <ButtonModalSingle text={'완료'} onClick={buttonModalSingleClick} />
        <ButtonModalSingle text={'입력'} onClick={buttonModalSingleClick} />

        <div>✔️Modal_puzzle_select</div>
        <ModalPuzzleSelect
          number={1}
          boothName={'총학 중앙본부'}
          boothInfo={'우리의 목소리를 모아, 단절 없는 흐름을 그리다'}
        />

        <ModalPuzzleSelect
          number={2}
          boothName={'총학 수익사업 부스'}
          boothInfo={'덕우가 뭘 좋아할지 몰라서 다 준비했어.'}
          boothHint={
            <>
              ※ 구매하지 않아도 퍼즐 수집이 가능합니다.
              <br />
              자유롭게 구경해 주세요!
            </>
          }
        />

        <ModalPuzzleSelect
          number={3}
          boothName={'포토부스'}
          boothInfo={'여운을 종이로 남기고 싶은 순간(✌️ 🧀 😁)'}
          boothHint={
            <>
              ※ 사진을 찍기 위해 줄을 서 있을 경우 질서를 유지할 수 있게 도와주세요. 퍼즐을 수집하는 경우 스태프의
              안내에 따라 옆쪽에서 QR 코드를 찾아 주세요!
            </>
          }
        />

        <ModalPuzzleSelect
          number={9}
          boothName={'부스 전체'}
          boothInfo={'부스 마을로 놀러 오세요!'}
          boothHint={
            '※ 모든 부스에서 동일한 퍼즐 한 조각만을 모을 수 있습니다. 가급적이면 부스를 잘 즐긴 후 퍼즐을 수집해주세요!'
          }
        />

        <div>✔️Modal_puzzle_approve</div>
        <ModalPuzzleApprove state={true} number={1} boothName={'멋쟁이사자처럼'} onClick={modalPuzzleApproveClick} />
        <ModalPuzzleApprove
          state={false}
          value={modalPuzzleApprove}
          onChange={modalPuzzleApproveChange}
          right={right}
          onClickL={modalPuzzleApproveLeftClick}
          onClickR={modalPuzzleApproveRightClick}
        />

        <div>✔️Modal_puzzle_goods</div>
        <ModalPuzzleGoods value={modalPuzzleGoods} onChange={modalPuzzleGoodsChange} onClick={modalPuzzleGoodsClick} />
      </div>
    </>
  );
};

export default Test;
