import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import * as R from '@review/ReviewStyle';
import Chat from '@review/components/Chat';
import SendImg from '@assets/review/icon-send.svg';
import SendImg2 from '@assets/review/icon-send-white.svg';
import keywordMap from '@data/keywords.json';

function Review() {
  const [reviews, setReviews] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [autoPlayKeyword, setAutoPlayKeyword] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const textareaRef = useRef(null);
  const reviewRef = useRef(null);
  const wrapperRef = useRef(null);

  const highlightKeywords = (text) => {
    const keywords = Object.keys(keywordMap);
    const regex = new RegExp(`(${keywords.join('|')})`, 'g');
    const escaped = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
    const highlighted = escaped.replace(regex, '<span>$1</span>');
    return `<span class="normal-text">${highlighted}</span>`;
  };

  const handleInput = (e) => {
    const value = e.target.value;
    setInputValue(value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const scrollToBottom = () => {
    if (reviewRef.current) {
      requestAnimationFrame(() => {
        reviewRef.current.scrollTop = reviewRef.current.scrollHeight;
      });
    }
  };

  const fetchReviews = async () => {
    try {
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/reviews`);
      const fetched = res.data.data.reviewList;
      const ordered = [...fetched].sort((a, b) => a.reviewId - b.reviewId);
      setReviews(ordered);
    } catch (err) {
      console.error('리뷰 조회 실패:', err);
    }
  };

  const extractFirstMatchedKeyword = (text) => {
    const keywords = Object.keys(keywordMap);
    const matched = keywords.find((kw) => text.includes(kw));
    return matched || null;
  };

  const postReview = async () => {
    if (!inputValue.trim()) return;
    const matchedKeyword = extractFirstMatchedKeyword(inputValue.trim());
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/reviews`, {
        content: inputValue.trim(),
      });
      setInputValue('');
      if (textareaRef.current) textareaRef.current.style.height = 'auto';
      setAutoPlayKeyword(matchedKeyword);
      await fetchReviews();
      setTimeout(scrollToBottom, 200);
    } catch (err) {
      console.error('리뷰 작성 실패:', err);
    }
  };

  useEffect(() => {
    const loadInitial = async () => {
      await fetchReviews(0);

      requestAnimationFrame(() => {
        setTimeout(() => {
          scrollToBottom();
          setIsLoading(false);
        }, 200);
      });
    };

    loadInitial();

    const observer = new ResizeObserver(() => {
      scrollToBottom();
    });

    if (reviewRef.current) {
      observer.observe(reviewRef.current);
    }

    return () => {
      if (reviewRef.current) {
        observer.unobserve(reviewRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
    }
  }, [inputValue]);

  return (
    <R.Container>
      <R.Review ref={reviewRef}>
        {isLoading ? (
          <R.Empty>후기 불러오는 중...</R.Empty>
        ) : reviews.length > 0 ? (
          reviews.map((item, index) => (
            <Chat
              key={item.reviewId}
              message={item.content}
              autoPlayKeyword={index === reviews.length - 1 ? autoPlayKeyword : null}
            />
          ))
        ) : (
          <R.Empty>2025 근화제 여운의 후기를 남겨주세요!</R.Empty>
        )}
      </R.Review>
      <R.Area>
        <R.Input>
          <R.Wrapper ref={wrapperRef}>
            <R.Highlighter dangerouslySetInnerHTML={{ __html: highlightKeywords(inputValue) + '\u200B' }} />
            <R.StyledTextarea
              ref={textareaRef}
              rows={1}
              value={inputValue}
              onInput={handleInput}
              placeholder="후기를 작성해주세요!"
            />
          </R.Wrapper>
        </R.Input>
        <R.Button $active={inputValue.trim() !== ''} onClick={postReview}>
          <img src={inputValue.trim() !== '' ? SendImg2 : SendImg} alt="send" />
        </R.Button>
      </R.Area>
    </R.Container>
  );
}

export default Review;
