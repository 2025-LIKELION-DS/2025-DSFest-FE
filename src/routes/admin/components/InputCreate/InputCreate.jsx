import * as I from '@admin/components/InputCreate/InputCreateStyle';

/**
 * 어드민 페이지에서 사용되는 input 컴포넌트입니다.
 * 어드민 퍼즐 QR 생성에서 사용됩니다.
 *
 * @param {string} placeholder -- placeholder 내용
 * @param {string} value -- value 내용
 * @param {function} onChange -- input의 onChange 함수
 * @param {function} onKeyDown -- input 입력 후 enter 함수
 * ex) <InputCreate placeholder={"총학생회"} value={value} onChange={(e) => setValue(e.target.value)} onKeyDown={onKeyDown}/>
 *
 * @author 김서윤
 * **/

const InputCreate = ({ placeholder, value, onChange, onKeyDown }) => {
  return (
    <I.InputContainer>
      <I.InputWrapper>
        <I.Input placeholder={placeholder} type="text" value={value} onChange={onChange} onKeyDown={onKeyDown} />
      </I.InputWrapper>
    </I.InputContainer>
  );
};

export default InputCreate;
