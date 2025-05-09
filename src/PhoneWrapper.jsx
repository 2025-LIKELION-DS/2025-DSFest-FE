import { useRef } from 'react';
import App from '@/App.jsx';
import ScrollToTop from '@hooks/ScrollToTop';
import YeounLogo from '@assets/main/title-yeoun.png';
import YeounText from '@assets/responsive/text-yeoun.svg';
import * as C from '@styles/CommonStyle.js';

export default function PhoneWrapper() {
  const phoneRef = useRef();

  return (
    <>
      <ScrollToTop scrollTargetRef={phoneRef} />
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
