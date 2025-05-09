import React, { useState, useEffect, useRef } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import * as C from '@review/components/ChatStyle';
import keywordMap from '@data/keywords.json';

const Chat = ({ message, autoPlayKeyword }) => {
  const [activeAnimation, setActiveAnimation] = useState(null);
  const hasAutoPlayed = useRef(false);
  const playerRef = useRef(null);
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!hasAutoPlayed.current && autoPlayKeyword && message.includes(autoPlayKeyword)) {
      setActiveAnimation(keywordMap[autoPlayKeyword]);
      hasAutoPlayed.current = true;
    }
  }, [autoPlayKeyword, message]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (overlayRef.current && !overlayRef.current.contains(e.target)) {
        setActiveAnimation(null);
      }
    };

    if (activeAnimation) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [activeAnimation]);

  const handleClick = (lottieFile) => {
    setActiveAnimation(lottieFile);
  };

  const renderMessage = () => {
    const regex = new RegExp(`(${Object.keys(keywordMap).join('|')})`, 'g');
    const parts = message.split(regex);

    return parts.map((part, idx) => {
      if (keywordMap[part]) {
        return (
          <C.Highlight key={idx} onClick={() => handleClick(keywordMap[part])}>
            {part}
          </C.Highlight>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <>
      <C.Message>{renderMessage()}</C.Message>
      {activeAnimation && (
        <C.LottieOverlay ref={overlayRef} isStill={activeAnimation === 'still.json'}>
          <Player
            ref={playerRef}
            autoplay
            keepLastFrame
            src={`/lotties/${activeAnimation}`}
            style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            onEvent={(event) => {
              if (event === 'complete') {
                setActiveAnimation(null);
              }
            }}
          />
        </C.LottieOverlay>
      )}
    </>
  );
};

export default Chat;
