import * as B from '@components/admin/ButtonAdminDual/ButtonAdminDualStyle'
import React from 'react';

/**
 * 어드민 페이지에서 사용되는 dual 버튼 컴포넌트입니다. 
 * 공지사항 수정, QR 생성 페이지 등에서 사용됩니다. 
 * 
 * @param {string | React.ReactNode} contextL -- 왼쪽 버튼에 표시할 내용 (텍스트 혹은 img 태그)
 * @param {string} colorL -- 왼쪽 버튼 배경 색상
 * @param {function} onClickL -- 왼쪽 버튼 클릭 시 실행될 함수
 * 
 * @param {string | React.ReactNode} contextR -- 오른쪽 버튼에 표시할 내용 (텍스트 혹은 img 태그)
 * @param {string} colorR -- 오른쪽 버튼 배경 색상
 * @param {function} onClickR -- 오른쪽 버튼 클릭 시 실행될 함수
 * 
 * ex1) <ButtonAdminDual contentL={"수정"} colorL={`${palette.mainPurple}`} contentR={"삭제"} colorR={`${palette.grayscale.white}`}/>
 * 
 * ex2) <ButtonAdminDual contentL={<Down />} colorL={`${palette.grayscale.white}`} contentR={<Send />} colorR={`${palette.grayscale.white}`}/>
 * ex2) import Down from '@assets/admin/icon-download.svg?react';
 * 
 * 배경색에 따라 글자 색 및 border 컬러가 결정됩니다. 
 *
 * @author 김진효
 * **/

const ButtonAdminDual = ({contentL, colorL, onClickL, contentR, colorR, onClickR}) =>{
  const renderContent = (content) => {
    if (React.isValidElement(content)) {
      // React 요소인 경우 (svg파일)
      return React.cloneElement(content, { style: { fill: "currentColor" } });
    }
    return content; // 문자열 -> 그대로 렌더링
  };

  return(
    <B.ButtonContainer>
      <B.ButtonCommon color={colorL} onClick={onClickL}>
        {renderContent(contentL)}
      </B.ButtonCommon>
      <B.ButtonCommon color={colorR} onClick={onClickR}>
        {renderContent(contentR)}
      </B.ButtonCommon>
    </B.ButtonContainer>
  )
}

export default ButtonAdminDual;