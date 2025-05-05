import React from 'react';
import * as C from '@notice/components/ContactStyle';
import KakaoImg from '@assets/notice/icon-kakaotalk-notext.svg';

function Contact() {
  const handleKakaoClick = () => {
    window.open('http://pf.kakao.com/_wxciwn', '_blank');
  };

  return (
    <C.Contact>
      <C.Top>
        <C.Title>
          {'덕성여자대학교\n제 41대 총학생회 운율'.split('\n').map((line, index) => (
            <React.Fragment key={index}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </C.Title>
        <C.Btn onClick={handleKakaoClick}>
          <img src={KakaoImg} alt="카카오톡" />
          <C.BtnText>카카오톡 문의</C.BtnText>
        </C.Btn>
      </C.Top>
      <C.Bottom>에브리타임과 인스타그램을 통한 문의는 받지 않습니다.</C.Bottom>
    </C.Contact>
  );
}

export default Contact;
