import React, { useEffect, useRef } from "react";
import "./scroller.scss"; // Adjust the path as per your file structure
import arrow from "../../assets/arrow.svg";

const ScrollableComponent = ({ data, setScrolling }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      if (container) {
        const isScrollable =
          container.scrollHeight - container.clientHeight <=
          container.scrollTop;
        if (isScrollable) {
          container.style.overflowY = "hidden"; // Disable further scrolling
          setScrolling(false);
        } else {
          container.style.overflowY = "auto"; // Enable scrolling
          setScrolling(true);
        }
      }
    };

    if (container) {
      container.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", handleScroll);
      }
    };
  }, [setScrolling]);

  const openCaseStudies = () => {
    window.location.href = "/caseStudies";
  };

  const renderImages = () => {
    return (
      <>
        {data.map((img, index) => (
          <figure key={index}>
            <img src={img.icon} alt={`Image ${index}`} onClick={() => {window.location.href = img.redirectUrl}} style={{cursor: 'pointer'}}/>
          </figure>
        ))}
        <figure>
          <div className="end-of-scroll"></div>{" "}
          {/* Transparent div at the end */}
        </figure>
      </>
    );
  };

  return (
    <div>
      <div className="caseHead">Case Studies</div>
      <div className="caseSub">
        See How we Built <br />
        Top Quality Products
      </div>
      <div className="scrollableContainer" ref={containerRef}>
        <article>{renderImages()}</article>
      </div>
      <div
        className="getTouchScroll"
        onClick={openCaseStudies}
        style={{ marginTop: "36px" }}
      >
        View All Case Studies
        <img src={arrow} alt="arrow" className="arrowapp" />
      </div>
    </div>
  );
};

export default ScrollableComponent;
