// import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
// import axios from "axios";
import { isAdminLoggedIn } from '@utils/admin';
import Contact from '@notice/components/Contact';
import AdminBtn from '@components/admin/ButtonAdminSingle/ButtonAdminSingle';
// import Content from '@notice/components/Content';
import * as L from '@notice/ListStyle';
import palette from '@styles/theme';

function List() {
  const navigate = useNavigate();
  const isAdmin = isAdminLoggedIn();
  // const [contents, setContents] = useState([]);

  const handleAdminBtn = () => {
    if (isAdminLoggedIn()) {
      navigate('/notice/new');
    }
  };

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_API_URL}/api/notices`)
  //     .then((response) => {
  //       setContents(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("공지사항 목록을 불러오는 중 오류 발생:", error);
  //     });
  // }, []);

  return (
    <>
      {isAdmin && (
        <L.AdminBtnArea>
          <AdminBtn text="작성하기" color={palette.mainPurple} onClick={handleAdminBtn} />
        </L.AdminBtnArea>
      )}
      <L.List>
        {!isAdmin && <Contact />}
        <L.Contents>
          {/* {contents.map((content) => (
          <Content
            title={content.id}
            preview={content.}
            previewImg={content.}
            onClick={() => navigate(`/notice/${content.id}`)}
          />
        ))} */}
        </L.Contents>
      </L.List>
    </>
  );
}

export default List;
