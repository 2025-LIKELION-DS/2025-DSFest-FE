import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop({ scrollTargetRef }) {
  const { pathname } = useLocation();

  useEffect(() => {
    scrollTargetRef.current.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop;
