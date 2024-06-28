import React, { useEffect } from "react";
import { connect } from "react-redux";
import s from "./styles.css";
import arrow from "../../assets/arrow.svg";
import { testinomials } from "../../data";
import Carousel from "../Carousel";

const Testinomials = (props) => {

  return (
    <div className="testinomialContainer">
        <div className="header">
            <div className="testinomialsText">Testimonials</div>
            <div className="testSubText">See what people are <br/>saying <span className="testSubTextAbt">about us</span></div>
        </div>
        <div className="testContainer">
            {<Carousel items={testinomials} />}
        </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.posts.posts,
});

export default connect(mapStateToProps)(Testinomials);
