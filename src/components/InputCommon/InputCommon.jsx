import * as I from '@components/InputCommon/InputCommonStyle';

/**
 * 가장 기본적으로 사용되는 input 컴포넌트입니다.
 * 부스 비밀번호, 관계자 비밀번호, 부스 이름 입력 등에 사용됩니다.
 *
 * @param {string} placeholder -- placeholder 내용
 * @param {string} height -- input 높이
 * @param {string} value -- value 내용
 * @param {function} onChange -- input의 onChange 함수
 * ex) <InputCommon placeholder={"부스 비밀번호를 입력해주세요."} height="48px" value={value} onChange={(e)=> setValue(e.target.value)}/>
 *
 * 부스 비밀번호 및 관계자 비밀번호는 height="48px",
 * 부스 이름 입력은 height="56px"로 넘기면 됩니다.
 *
 * @author 김진효
 * **/

const InputCommon = ({ placeholder, height, value, onChange }) => {
  return (
    <I.InputContainer height={height}>
      <I.InputCommon placeholder={placeholder} value={value} height={height} onChange={onChange} />
    </I.InputContainer>
  );
};

export default InputCommon;
