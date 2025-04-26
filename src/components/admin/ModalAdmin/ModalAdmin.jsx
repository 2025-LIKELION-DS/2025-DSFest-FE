import * as M from '@components/admin/ModalAdmin/ModalAdminStyle'

/**
 * 어드민 페이지에서 사용되는 모달 컴포넌트입니다. 
 * 공지사항 수정, 업로드, 삭제 등에서 사용됩니다.
 * 
 * @param {string} text -- 모달창에 작성할 내용 
 * @param {string} confirmText -- 오른쪽에 들어갈 확인 문구 (확인 or 삭제)
 * @param {function} onClose -- 취소 버튼 클릭 시 실행될 함수
 * @param {function} onConfirm -- 확인 or 삭제 버튼 클릭 시 실행될 함수
 * ex) <ModalAdmin text={"공지사항을 수정하시겠습니까?"} confirmText={"확인"} onClose={onClose} onConfirm={onConfirm}/>
 *
 * @author 김진효
 * **/

const ModalAdmin = ({text, confirmText, onClose, onConfirm}) =>{

  return(
    <M.ModalAdmin>
      <M.Text>{text}</M.Text>
      <M.Line></M.Line>
      <M.ConfirmContainer>
        <M.ConfirmText onClick={onClose}>취소</M.ConfirmText>
        <M.ColLine></M.ColLine>
        <M.ConfirmPulple onClick={onConfirm}>{confirmText}</M.ConfirmPulple>
      </M.ConfirmContainer>
    </M.ModalAdmin>
  )
}

export default ModalAdmin;