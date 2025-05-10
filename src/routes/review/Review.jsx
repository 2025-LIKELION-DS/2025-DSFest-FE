import React, { useEffect, useState, useRef, useLayoutEffect } from 'react';
import axios from 'axios';
import * as R from '@review/ReviewStyle';
import Chat from '@review/components/Chat';
import SendImg from '@assets/review/icon-send.svg';
import SendImg2 from '@assets/review/icon-send-white.svg';
import errorIcon from '@assets/puzzle/icon-pupple.svg';
import keywordMap from '@data/keywords.json';

function Review({ scrollTargetRef }) {
  const [reviews, setReviews] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [autoPlayKeyword, setAutoPlayKeyword] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isFocus, setIsFocus] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const textareaRef = useRef(null);
  const reviewRef = useRef(null);
  const wrapperRef = useRef(null);
  const initialScrollY = useRef(0);

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
    const el = scrollTargetRef?.current || window;
    if (el === window) {
      window.scrollTo({ top: document.body.scrollHeight });
    } else {
      el.scrollTop = el.scrollHeight;
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
      setTimeout(scrollToBottom, 100);
    } catch (err) {
      console.error('리뷰 작성 실패:', err);
      if (err.response?.status === 500) {
        setToastMessage('');
        setTimeout(() => {
          setToastMessage('255자 이내로 작성해주세요.');
        }, 50);
      } else {
        setToastMessage('');
        setTimeout(() => {
          setToastMessage('오류가 발생했습니다.');
        }, 50);
      }
    }
  };

  useEffect(() => {
    const loadInitial = async () => {
      await fetchReviews(0);

      requestAnimationFrame(() => {
        setTimeout(() => {
          scrollToBottom();
          setIsLoading(false);
        }, 100);
      });
    };

    loadInitial();

    const handleIOSKeyboard = () => {
      const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
      const isKeyboardOpen = window.visualViewport && window.visualViewport.height < window.innerHeight;

      if (isIOS && isKeyboardOpen && textareaRef.current) {
        if (document.activeElement !== textareaRef.current) {
          textareaRef.current.focus();
        }
      }
    };

    window.visualViewport?.addEventListener('resize', handleIOSKeyboard);

    return () => {
      window.visualViewport?.removeEventListener('resize', handleIOSKeyboard);
    };
  }, []);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.scrollTop = wrapperRef.current.scrollHeight;
    }
  }, [inputValue]);

  useLayoutEffect(() => {
    if (!isLoading) scrollToBottom();
  }, [isLoading]);

  useEffect(() => {
    const handleScrollLock = () => {
      const currentY = window.scrollY;

      if (isFocus) {
        if (!initialScrollY.current) {
          initialScrollY.current = currentY;
        }

        if (currentY > initialScrollY.current) {
          window.scrollTo(0, initialScrollY.current);
        }
      } else {
        initialScrollY.current = 0;
      }
    };

    window.visualViewport?.addEventListener('resize', handleScrollLock);
    window.addEventListener('scroll', handleScrollLock);

    return () => {
      window.visualViewport?.removeEventListener('resize', handleScrollLock);
      window.removeEventListener('scroll', handleScrollLock);
    };
  }, [isFocus]);

  return (
    <>
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
        {toastMessage && (
          <R.ToastBox>
            <R.ToastContent>
              <img src={errorIcon} alt="error" />
              <R.ToastMessage>
                <div>{toastMessage}</div>
              </R.ToastMessage>
            </R.ToastContent>
          </R.ToastBox>
        )}
        <R.ToastBox>
          <R.ToastContent>
            <img src={errorIcon} alt="error" />
            <R.ToastMessage>
              <div>{toastMessage}</div>
            </R.ToastMessage>
          </R.ToastContent>
        </R.ToastBox>
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
              onFocus={() => setIsFocus(true)}
              onBlur={() => setIsFocus(false)}
            />
          </R.Wrapper>
        </R.Input>
        <R.Button $active={inputValue.trim() !== ''} onClick={postReview}>
          <img src={inputValue.trim() !== '' ? SendImg2 : SendImg} alt="send" />
        </R.Button>
      </R.Area>
    </>
  );
}

export default Review;
