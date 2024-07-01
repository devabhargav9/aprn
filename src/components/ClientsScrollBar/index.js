import React, { useEffect, useRef } from "react";
import { connect } from "react-redux";
import s from "./clientScroll.css";
import { clients } from "../../data";

const ClientScrollBar = (props) => {
  const carouselContentRef = useRef(null);

  useEffect(() => {
    const carouselContent = carouselContentRef.current;
    const clone = carouselContent.cloneNode(true);
    clone.classList.add("clone");
    carouselContent.parentElement.appendChild(clone);
  }, []);

  const getImagesForClientScroll = (clients) => {
    return clients.map((client, index) => (
      <div key={index} className="client-image-container">
        <img src={client} alt="client" className="client-image" />
      </div>
    ));
  };

  return (
    <div className="carousel-container">
      {props.showHeader && (
        <div className="clientHeader">Some of our incredible clients</div>
      )}
      <div className="carousel-track">
        <div className="carousel-content" ref={carouselContentRef}>
          {getImagesForClientScroll(clients)}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(ClientScrollBar);
