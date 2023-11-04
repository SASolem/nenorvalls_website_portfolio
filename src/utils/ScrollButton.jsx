import React, { useEffect } from 'react';
import { ScrollButton } from './ScrollButtonStyles';

const ScrollToTopButton = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollButton = document.querySelector('.scrollButton');
      if (scrollButton) {
        if (window.pageYOffset > 20) {
          scrollButton.style.display = 'block';
        } else {
          scrollButton.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollButton className="scrollButton" onClick={scrollToTop}>
      Top
    </ScrollButton>
  );
};

export default ScrollToTopButton;
