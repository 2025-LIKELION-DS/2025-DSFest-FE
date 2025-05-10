// usePreviousPath.js
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const usePreviousPath = () => {
  const location = useLocation();
  const previousPathRef = useRef(null);
  const currentPathRef = useRef(location.pathname);

  useEffect(() => {
    previousPathRef.current = currentPathRef.current;
    currentPathRef.current = location.pathname;
  }, [location.pathname]);

  return previousPathRef.current;
};

export default usePreviousPath;
