import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as L from '@admin/LoginStyle';
import { loginAdmin } from '@utils/admin';
import Input from '@components/admin/InputAdmin/InputAdmin';
import Button from '@components/admin/ButtonAdminSingle/ButtonAdminSingle';
import palette from '@styles/theme';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (loginAdmin(id, password)) {
      navigate('/admin/menu', { replace: true });
    } else {
      alert('아이디와 비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <L.Login>
      <L.Title>축제 관계자 페이지</L.Title>
      <L.InputArea>
        <Input placeholder="아이디" type="text" value={id} onChange={(e) => setId(e.target.value)} />
        <Input placeholder="비밀번호" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </L.InputArea>
      <Button text="로그인" color={palette.mainPurple} onClick={handleLogin} />
    </L.Login>
  );
}

export default Login;
