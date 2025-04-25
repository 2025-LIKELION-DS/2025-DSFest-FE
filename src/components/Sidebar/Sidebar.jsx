import * as S from "@components/Sidebar/SidebarStyle";
import { useNavigate } from "react-router-dom";

import Close from "@assets/sidebar/icon-close.svg";
import TimeTable from "@assets/sidebar/icon-timetable.svg";
import Map from "@assets/sidebar/icon-map.svg";
import Notice from "@assets/sidebar/icon-notice.svg";
import Review from "@assets/sidebar/icon-review.svg";
import Puzzle from "@assets/sidebar/icon-puzzlegame.svg";
import Unyul from "@assets/sidebar/logo-unyul.png";
import Likelion from "@assets/sidebar/logo-likelion.png";
import Instagram from "@assets/sidebar/icon-instagram.svg";
import Kakaotalk from "@assets/sidebar/icon-kakaotalk.svg";

const Sidebar = ({ isSidebarOpen, onClose }) => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <S.Overlay onClick={onClose} />
      <S.Sidebar $isSidebarOpen={isSidebarOpen}>
        <S.Close onClick={onClose}>
          <img src={Close} alt="닫기" />
        </S.Close>

        <S.MenuList>
          <S.Menu onClick={() => handleLinkClick("/timetable")}>
            <img src={TimeTable} alt="타임테이블" />
            <S.MenuTitle>타임테이블</S.MenuTitle>
          </S.Menu>

          <S.Menu onClick={() => handleLinkClick("/map")}>
            <img src={Map} alt="지도" />
            <S.MenuTitle>지도</S.MenuTitle>
          </S.Menu>

          <S.Menu onClick={() => handleLinkClick("/notice")}>
            <img src={Notice} alt="공지사항" />
            <S.MenuTitle>공지사항</S.MenuTitle>
          </S.Menu>

          <S.Menu onClick={() => handleLinkClick("/review")}>
            <img src={Review} alt="후기" />
            <S.MenuTitle>후기</S.MenuTitle>
          </S.Menu>

          <S.Menu onClick={() => handleLinkClick("/puzzle")}>
            <img src={Puzzle} alt="퍼즐게임" />
            <S.MenuTitle>퍼즐게임</S.MenuTitle>
          </S.Menu>
        </S.MenuList>

        <S.Info>
          <div>
            <img src={Unyul} alt="운율" />
            <img src={Likelion} alt="멋사" />
          </div>

          <S.InfoContainer>
            <S.Line></S.Line>
            <div>
              <S.InfoTitle>총학생회 {"<운율>"} </S.InfoTitle>
              <S.InfoTitle>덕성여대 멋쟁이사자처럼</S.InfoTitle>
            </div>
          </S.InfoContainer>

          <S.NameList>
            <div>
              <S.Part>Plan&Design</S.Part>
              <S.Name>강승현 송은지</S.Name>
            </div>

            <div>
              <S.Part>Front-end</S.Part>
              <S.Name>김서윤 김진효 노진경</S.Name>
              <S.Name>목소연 정서영 최윤영</S.Name>
            </div>

            <div>
              <S.Part>Back-end</S.Part>
              <S.Name>고희주 김은서 이가은</S.Name>
              <S.Name>장다연 조희원</S.Name>
            </div>

            <S.Footer>
              <div>
                <S.CopyRight>© 2025. likelion_ds</S.CopyRight>
                <S.CopyRight>all rights reserved.</S.CopyRight>
              </div>
              <S.SNSContainer>
                <a href="https://www.instagram.com/likelion_ds" target="_blank" rel="noopener noreferrer">
                  <img src={Instagram} alt="인스타그램" />
                </a>

                <a href="https://open.kakao.com/me/LikelionDS" target="_blank" rel="noopener noreferrer">
                  <img src={Kakaotalk} alt="카카오톡" />
                </a>
              </S.SNSContainer>
            </S.Footer>
          </S.NameList>
        </S.Info>
      </S.Sidebar>
    </>
  );
};

export default Sidebar;
