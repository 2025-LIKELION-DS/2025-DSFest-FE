import { useRef, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import * as F from '@notice/FormStyle';
import AddImg from '@assets/notice/icon-add.svg';
import DeleteImg from '@assets/notice/icon-close.svg';
import Button from '@components/admin/ButtonAdminSingle/ButtonAdminSingle';
import Modal from '@components/admin/ModalAdmin/ModalAdmin';
import palette from '@styles/theme';

function Form({ type }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = type === 'edit';
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState([]);
  const [serverImages, setServerImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [imagesToKeep, setImagesToKeep] = useState([]);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const fileInputRef = useRef(null);
  const textAreaRef = useRef(null);

  useEffect(() => {
    if (isEdit && id) {
      axios
        .get(`${import.meta.env.VITE_API_URL}/notices/${id}`)
        .then((res) => {
          const { title, content, images } = res.data.data;
          setTitle(title);
          setContent(content);
          setServerImages(images);
          setImagesToKeep(images.map((img) => img.url));
          setImages(
            images.map((img) => ({
              id: img.id,
              src: img.url,
            })),
          );
        })
        .catch((err) => {
          console.error('불러오기 실패:', err);
          alert('공지사항 데이터를 불러오지 못했습니다.');
        });
    }
  }, [id, isEdit]);

  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  }, [content]);

  const handleInput = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = 'auto';
      textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
    }
  };

  const handleFileChange = async (e) => {
    const files = Array.from(e.target.files);
    setImageFiles((prev) => [...prev, ...files]);

    const readFiles = files.map(
      (file) =>
        new Promise((resolve) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            resolve({ id: null, src: reader.result });
          };
          reader.readAsDataURL(file);
        }),
    );

    const newImages = await Promise.all(readFiles);
    setImages((prev) => [...prev, ...newImages]);
  };

  const handleDeleteImage = (index) => {
    const removed = images[index];
    if (removed.id) {
      setImagesToKeep((prev) => prev.filter((url) => url !== removed.src));
    } else {
      setImageFiles((prev) => prev.filter((_, i) => i !== index - serverImages.length));
    }
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const handleConfirm = () => {
    setIsConfirmModalOpen(false);
    handleSubmit();
  };

  const handleSubmit = async () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('title', title);
    formData.append('content', content);
    if (isEdit && imagesToKeep.length > 0) {
      imagesToKeep.forEach((url) => {
        formData.append('imagesToKeep', url);
      });
    }
    imageFiles.forEach((file) => {
      formData.append('uploadImages', file);
    });

    const url = isEdit ? `${import.meta.env.VITE_API_URL}/notices/${id}` : `${import.meta.env.VITE_API_URL}/notices`;
    const method = isEdit ? 'put' : 'post';

    try {
      await axios({
        method,
        url,
        data: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert(isEdit ? '공지사항이 수정되었습니다.' : '공지사항이 등록되었습니다.');
      navigate('/notice');
    } catch (err) {
      console.error('업로드 실패:', err);
      alert('공지사항 업로드에 실패했습니다.');
    }
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <F.Form>
        <F.Input value={title} placeholder="제목을 입력하세요" onChange={(e) => setTitle(e.target.value)} />
        <F.TextArea
          value={content}
          placeholder="내용을 입력하세요"
          onChange={(e) => setContent(e.target.value)}
          ref={textAreaRef}
          onInput={handleInput}
        />
      </F.Form>
      <F.Images>
        <F.ImagePicker onClick={() => fileInputRef.current?.click()}>
          <img src={AddImg} alt="이미지 추가" />
        </F.ImagePicker>
        {images.map((image, index) => (
          <F.Preview key={index}>
            <img src={image.src} alt={`preview-${index}`} />
            <F.DeleteBtn onClick={() => handleDeleteImage(index)}>
              <img src={DeleteImg} alt="삭제" />
            </F.DeleteBtn>
          </F.Preview>
        ))}
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: 'none' }}
          accept="image/*"
          multiple
          onChange={handleFileChange}
        />
      </F.Images>
      <Button
        text={isEdit ? '수정 완료' : '작성 완료'}
        color={palette.mainPurple}
        onClick={() => {
          if (!title.trim() || !content.trim()) {
            alert('제목과 내용을 모두 입력해주세요.');
            return;
          }
          setIsConfirmModalOpen(true);
        }}
      />
      {isConfirmModalOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
          }}>
          <Modal
            text={isEdit ? '공지사항을 수정하시겠습니까?' : '공지사항을 업로드하시겠습니까?'}
            confirmText={isEdit ? '수정' : '등록'}
            onClose={() => setIsConfirmModalOpen(false)}
            onConfirm={handleConfirm}
          />
        </div>
      )}
    </div>
  );
}

export default Form;
