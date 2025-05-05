import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import * as R from '@review/ReviewStyle';
import Chat from '@review/components/Chat';
import SendImg from '@assets/review/icon-send.svg';
import SendImg2 from '@assets/review/icon-send-white.svg';

function Review() {
  const [reviews, setReviews] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const textareaRef = useRef(null);
  const reviewRef = useRef(null);

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 140)}px`;
    }
  };

  const scrollToBottom = () => {
    if (reviewRef.current) {
      reviewRef.current.scrollTop = reviewRef.current.scrollHeight;
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/reviews?page=0`);
      const fetchedReviews = res.data.data.reviewList;
      setReviews(fetchedReviews.reverse());
      setTimeout(scrollToBottom, 100);
    } catch (err) {
      console.error('리뷰 조회 실패:', err);
    }
  };

  const postReview = async () => {
    if (!inputValue.trim()) return;

    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, {
        content: inputValue.trim(),
      });

      setInputValue('');
      if (textareaRef.current) {
        textareaRef.current.style.height = 'auto';
      }
      await fetchReviews();
    } catch (err) {
      console.error('리뷰 작성 실패:', err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  return (
    <R.Container>
      <R.Review ref={reviewRef}>
        {reviews.length > 0 ? (
          reviews.map((item) => <Chat key={item.reviewId} message={item.content} />)
        ) : (
          <R.Empty>2025 근화제 여운의 후기를 남겨주세요!</R.Empty>
        )}
      </R.Review>

      <R.Area>
        <R.Input>
          <textarea
            ref={textareaRef}
            placeholder="후기를 작성해주세요!"
            rows={1}
            value={inputValue}
            onInput={handleInput}
          />
        </R.Input>
        <R.Button $active={inputValue.trim() !== ''} onClick={postReview}>
          <img src={inputValue.trim() !== '' ? SendImg2 : SendImg} alt="send" />
        </R.Button>
      </R.Area>
    </R.Container>
  );
}

export default Review;
