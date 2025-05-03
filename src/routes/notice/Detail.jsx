import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { isAdminLoggedIn } from '@utils/admin';
import * as D from '@notice/DetailStyle';
import Button from '@components/admin/ButtonAdminDual/ButtonAdminDual';
import palette from '@styles/theme';

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/notices/${id}`)
      .then((response) => {
        setNotice(response.data.data);
      })
      .catch((error) => {
        console.error('공지사항을 불러오는 중 오류 발생:', error);
      });
  }, [id]);

  const handleEdit = () => {
    if (isAdminLoggedIn()) {
      navigate(`/notice/${id}/edit`);
    }
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm('글을 삭제하시겠습니까?');
    if (confirmDelete) {
      axios
        .delete(`${import.meta.env.VITE_API_URL}/notices/${id}`)
        .then(() => {
          alert('공지사항이 삭제되었습니다.');
          navigate('/notice');
        })
        .catch((error) => {
          console.error('삭제 중 오류 발생:', error);
          alert('공지사항 삭제에 실패했습니다.');
        });
    }
  };

  const renderContentWithLinks = (content) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    return content.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.split(urlRegex).map((part, i) =>
          urlRegex.test(part) ? (
            <a
              key={i}
              href={part}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: `${palette.mainPurple}`, textDecoration: 'underline' }}>
              {part}
            </a>
          ) : (
            part
          ),
        )}
        <br />
      </React.Fragment>
    ));
  };

  const handleImageClick = (clickedIndex) => {
    navigate('/notice/image', { state: { initialIndex: clickedIndex, images: notice.images } });
  };

  return (
    <>
      <D.Detail>
        {notice ? (
          <>
            <D.Title>{notice.title}</D.Title>
            <D.Content>{renderContentWithLinks(notice.content)}</D.Content>
            <D.Images>
              {notice.images.map((img, index) => (
                <D.Image key={img.id} src={img.url} alt={`이미지 ${index}`} onClick={() => handleImageClick(index)} />
              ))}
            </D.Images>
          </>
        ) : (
          <div>공지를 불러오는 중...</div>
        )}
      </D.Detail>
      {isAdminLoggedIn() && (
        <Button
          contentL={'수정'}
          colorL={palette.grayscale.white}
          onClickL={handleEdit}
          contentR={'삭제'}
          colorR={palette.grayscale.white}
          onClickR={handleDelete}
        />
      )}
    </>
  );
}

export default Detail;
