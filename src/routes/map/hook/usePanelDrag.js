import { useState, useRef, useEffect } from 'react';

export default function usePanelDrag(initialState = 'default') {
  const [panelState, setPanelState] = useState(initialState); // collapsed | default | expanded
  const [translateY, setTranslateY] = useState(0);

  const startY = useRef(null);
  const isDragging = useRef(false);
  const panelStateAtStart = useRef(panelState);

  // 공통 로직: 드래그 종료 후 상태 결정
  const handleDragEnd = () => {
    const delta = translateY;
    const from = panelStateAtStart.current;

    if (delta < -100) {
      // 위로 많이 올린 경우
      setPanelState('expanded');
    } else if (delta > 200) {
      // 아래로 많이 내린 경우
      setPanelState('collapsed');
    } else if (delta < -50) {
      // 아래로 많이 내린 경우
      setPanelState('default');
    } else {
      // 중간이면 default로 복귀
      setPanelState('default');
    }
    setTranslateY(0);
  };

  // 모바일 터치
  const handleTouchStart = (e) => {
    startY.current = e.touches[0].clientY;
    panelStateAtStart.current = panelState;
  };

  const handleTouchMove = (e) => {
    const deltaY = e.touches[0].clientY - startY.current;
    setTranslateY(deltaY);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // 마우스
  const handleMouseDown = (e) => {
    isDragging.current = true;
    startY.current = e.clientY;
    panelStateAtStart.current = panelState;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    const deltaY = e.clientY - startY.current;
    setTranslateY(deltaY);
  };

  const handleMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    handleDragEnd();
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [translateY]);

  return {
    panelState,
    translateY,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    handleMouseDown,
  };
}