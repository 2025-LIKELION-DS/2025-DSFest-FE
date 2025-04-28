import * as I from '@components/admin/InputAdmin/InputAdminStyle'

/**
 * 어드민 페이지에서 사용되는 input 컴포넌트입니다. 
 * 어드민 로그인의 아이디, 비밀번호 등에서 사용됩니다. 
 * 
 * @param {string} placeholder -- placeholder 내용
 * @param {string} type -- input type
 * @param {string} value -- value 내용
 * @param {function} onChange -- input의 onChange 함수 
 * ex) <InputAdmin placeholder={"아이디"} type={"text"} value={value} onChange={(e) => setValue(e.target.value)}/>
 *
 * @author 김진효
 * **/

const InputAdmin = ({placeholder, type, value, onChange}) =>{
  return(
    <I.InputContainer>
      <I.InputWrapper>
        <I.Text>{placeholder}</I.Text>
        <I.Line></I.Line>
        <I.Input placeholder={placeholder} type={type} value={value} onChange={onChange}/>
      </I.InputWrapper>
    </I.InputContainer>
  )
}

export default InputAdmin;