import React, { useContext, useEffect } from 'react';
import { GlobalStateContext } from '../context/ContextProvider';
import { useLocation } from 'react-router-dom';
import { delay } from 'framer-motion';

function ScrollToTop() {
  const { homeRef } = useContext(GlobalStateContext);
  useEffect(() => {
    const scrollTop = () => {
      homeRef.current.scrollIntoView({
        behavior: 'smooth',
      });
    };
    scrollTop();
  }, []);
}

export default ScrollToTop;
