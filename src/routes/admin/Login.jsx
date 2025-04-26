import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as L from '@admin/LoginStyle';
import { loginAdmin } from '@utils/admin';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginAdmin(id, password)) {
      navigate('/admin/menu', { replace: true });
    } else {
      alert('로그인 실패');
    }
  };

  return (
    <>
      <L.Login>어드민 로그인</L.Login>
      <div>
        <h1>로그인</h1>
        <input type="text" placeholder="아이디" value={id} onChange={(e) => setId(e.target.value)} />
        <input type="password" placeholder="비밀번호" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button onClick={handleLogin}>로그인</button>
      </div>
    </>
  );
}

export default Login;
