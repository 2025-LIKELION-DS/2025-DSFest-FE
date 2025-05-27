import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import { isAdminLoggedIn } from '@utils/admin';
import Contact from '@notice/components/Contact';
// import AdminBtn from '@components/admin/ButtonAdminSingle/ButtonAdminSingle';
import Content from '@notice/components/Content';
import * as L from '@notice/ListStyle';
// import palette from '@styles/theme';
import noticeData from '@data/notices.json';

function List() {
  const navigate = useNavigate();
  const isAdmin = isAdminLoggedIn();
  const [contents, setContents] = useState([]);

  // const handleAdminBtn = () => {
  //   if (isAdminLoggedIn()) {
  //     navigate('/notice/new');
  //   }
  // };

  // useEffect(() => {
  //   axios
  //     .get(`${import.meta.env.VITE_API_URL}/notices`)
  //     .then((response) => {
  //       setContents(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.error('공지사항 목록을 불러오는 중 오류 발생:', error);
  //     });
  // }, []);

  useEffect(() => {
    setContents(noticeData);
  }, []);

  return (
    <>
      {/* {isAdmin && (
        <L.AdminBtnArea>
          <AdminBtn text="작성하기" color={palette.mainPurple} onClick={handleAdminBtn} />
        </L.AdminBtnArea>
      )} */}
      <L.List>
        {!isAdmin && <Contact />}
        <L.Contents>
          {contents.length === 0 ? (
            <L.Empty>등록된 공지사항이 없습니다.</L.Empty>
          ) : (
            contents.map((content) => (
              <Content
                key={content.id}
                title={content.title}
                preview={content.content}
                previewImg={content.thumbnailUrl}
                onClick={() => navigate(`/notice/${content.id}`)}
              />
            ))
          )}
        </L.Contents>
      </L.List>
    </>
  );
}

export default List;
