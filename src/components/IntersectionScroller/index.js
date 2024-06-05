import React, { useRef, useEffect, useState } from 'react';
import './scroller.css';

const ScrollableComponent = () => {
  const containerRef = useRef(null);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [isInView, setIsInView] = useState(false);

  const handleScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
    setIsAtBottom(scrollTop + clientHeight >= scrollHeight);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            document.body.style.overflow = 'hidden';
          } else {
            setIsInView(false);
            document.body.style.overflow = 'auto';
          }
        });
      },
      { threshold: 0 }
    );

    observer.observe(containerRef.current);

    return () => {
      observer.disconnect();
      document.body.style.overflow = 'auto';
    };
  }, []);

  useEffect(() => {
    if (isInView && isAtBottom) {
      document.body.style.overflow = 'auto';
    }
  }, [isInView, isAtBottom]);

  return (
    <div
      className="scrollable-container"
      ref={containerRef}
      onScroll={handleScroll}
    >
      {/* Content goes here */}
      <div className="content">
        {/* Add a lot of content here to make it scrollable */}
        <p>Your scrollable content here...</p>
        <p>Your scrollable content here...</p>
        <p>Your scrollable content here...</p>
        <p>Your scrollable content here...</p>
        <p>Your scrollable content here...</p>
        <p>Your scrollable content here...</p>
        <p>Your scrollable content here...</p>
        <p>Your scrollable content here...</p>
        <p>Your scrollable content here...</p>
        <p>Your scrollable content here...</p>
        <p>Your scrollable content here...</p>
        <p>Your scrollable content here...</p>
      </div>
    </div>
  );
};

export default ScrollableComponent;
