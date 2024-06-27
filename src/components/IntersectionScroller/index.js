import React, { useEffect, useRef } from 'react';
import { jarallax } from 'jarallax'; // Import jarallax
import './scroller.scss'; // Adjust the path as per your file structure

const ScrollableComponent = ({ data }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      jarallax(containerRef.current);

      // Detect when all items are scrolled fully
      containerRef.current.addEventListener('scroll', handleScroll);

      return () => {
        containerRef.current.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleScroll = () => {
    const container = containerRef.current;
    if (container) {
      // Check if all items are scrolled fully
      const isScrollable = container.scrollHeight - container.clientHeight <= container.scrollTop;
      if (isScrollable) {
        container.style.overflowY = 'hidden'; // Disable further scrolling
      } else {
        container.style.overflowY = 'auto'; // Enable scrolling
      }
    }
  };

  const renderImages = () => {
    return (
      <>
        {data.map((img, index) => (
          <figure key={index}>
            <img src={img} alt={`Image ${index}`} />
          </figure>
        ))}
         <figure>
         <div className="end-of-scroll"></div> {/* Transparent div at the end */}

          </figure>
      </>
    );
  };

  return (
    <div>
      {/* <div className='caseHead'>Case Studies</div>
      <div className='caseSub'>See How we Built <br/>Top Quality Products</div> */}
      <div className="scrollableContainer" ref={containerRef}>
        <article>{renderImages()}</article>
      </div>
    </div>
  );
};

export default ScrollableComponent;
