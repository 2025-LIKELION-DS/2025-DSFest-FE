import * as I from '@components/puzzle/InputLogin/InputLoginStyle'
import { useState } from 'react'

import Cancle from '@assets/puzzle/icon-x.svg'
import Open from '@assets/puzzle/icon-password-open.svg'
import Close from '@assets/puzzle/icon-password-close.svg'

/**
 * 퍼즐 페이지에서 사용되는 input 컴포넌트입니다. 
 * 퍼즐 페이지의 로그인 등에서 사용됩니다. 
 * 
 * @param {string} placeholder -- placeholder 내용
 * @param {string} type -- input type (text or password)
 * @param {state} value -- value 내용
 * @param {function} onChange -- input의 onChange 함수 
 * ex) <InputLogin placeholder={"비밀번호를 입력해주세요"} type={"password"} value={value} onChange={(e)=> setValue(e.target.value)}/>
 *
 * @author 김진효
 * **/

const InputLogin = ({placeholder, type, value, onChange }) =>{
  const [showPwd, setShowPwd] = useState(false);

  const handleClear = () =>{
    setInputValue('');
  }

  const handlePwd = () =>{
    setShowPwd((prev)=> !prev)
  }

  return(
    <I.InputContainer>
      <I.InputLogin placeholder={placeholder} type={type === 'password' ? (showPwd ? 'text' : 'password') : type} value={value} onChange={onChange}/>
      <I.PwdIcon src={Cancle} alt='취소' onClick={handleClear}/>
      {type === 'password' && <I.PwdClose src={showPwd ? Open : Close} alt="비밀번호 가리기" onClick={handlePwd}/>}
    </I.InputContainer>
  )
}

export default InputLogin;