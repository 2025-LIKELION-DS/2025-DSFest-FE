import { useRef, useEffect } from 'react';
import App from '@/App.jsx';
import YeounLogo from '@assets/main/title-yeoun.png';
import YeounText from '@assets/responsive/text-yeoun.svg';
import * as C from '@styles/CommonStyle.js';

export default function PhoneWrapper() {
  const phoneRef = useRef();

  useEffect(() => {
    if (phoneRef.current) {
      phoneRef.current.scrollTo(0, 0);
    }
  }, []);

  return (
    <>
      <C.LeftContainer>
        <C.YeounLeft src={YeounLogo} alt="여운" />
      </C.LeftContainer>
      <C.Phone ref={phoneRef}>
        <App scrollTargetRef={phoneRef} />
      </C.Phone>
      <C.RightContainer>
        <C.YeounRight src={YeounText} alt="덕성여대 근화제" />
      </C.RightContainer>
    </>
  );
}
