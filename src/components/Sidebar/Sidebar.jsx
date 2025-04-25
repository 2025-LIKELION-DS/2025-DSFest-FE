import * as S from "@components/Sidebar/SidebarStyle";

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

const Sidebar = ({ isSidebarOpen }) => {
  console.log(isSidebarOpen);

  return (
    <>
      {isSidebarOpen && <S.Overlay />}
      <S.Sidebar>
        <div>
          <img src={Close} alt="닫기" />
        </div>

        <S.Menu>
          <img src={TimeTable} alt="타임테이블" />
          <p>타임테이블</p>
        </S.Menu>

        <S.Menu>
          <img src={Map} alt="지도" />
          <p>지도</p>
        </S.Menu>

        <S.Menu>
          <img src={Notice} alt="공지사항" />
          <p>공지사항</p>
        </S.Menu>

        <S.Menu>
          <img src={Review} alt="후기" />
          <p>후기</p>
        </S.Menu>

        <S.Menu>
          <img src={Puzzle} alt="퍼즐게임" />
          <p>퍼즐게임</p>
        </S.Menu>

        <div>
          <div>
            <img src={Unyul} alt="운율" />
            <img src={Likelion} alt="멋사" />
          </div>

          <div>
            <hr />
            <div>
              <p>총학생회 {"<운율>"} </p>
              <p>덕성여대 멋쟁이사자처럼</p>
            </div>
          </div>

          <div>
            <div>
              <p>Plan&Design</p>
              <p>강승현 송은지</p>
            </div>

            <div>
              <p>Front-end</p>
              <p>김서윤 김진효 노진경</p>
              <p>목소연 정서영 최윤영</p>
            </div>

            <div>
              <p>Back-end</p>
              <p>고희주 김은서 이가은</p>
              <p>장다연 조희원</p>
            </div>

            <div>
              <p>© 2025. likelion_ds all rights reserved.</p>
              <img src={Instagram} alt="인스타그램" />
              <img src={Kakaotalk} alt="카카오톡" />
            </div>
          </div>
        </div>
      </S.Sidebar>
    </>
  );
};

export default Sidebar;
